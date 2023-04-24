import 'xhr_polyfill'
import { serve } from 'std/server'
import { sendRequest } from '../_shared/chatgpt.ts'
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const requestJson = await req.json();
  let {query, history} = requestJson;

  if (!history) {
    history = [];
  }

  let aiResponse = await sendRequest(history, query);

  console.log(aiResponse.body);
  return new Response(JSON.stringify(aiResponse), {
    headers: {
      ...corsHeaders,
      "content-type": "application/json"
    }
  }); 
})