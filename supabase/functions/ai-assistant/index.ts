import 'xhr_polyfill'
import { serve } from 'std/server'
import { sendRequest } from '../_shared/chatgpt.ts'

serve(async (req) => {
  const requestJson = await req.json();
  let {query, history} = requestJson;

  if (!history) {
    history = [];
  }

  let aiResponse = await sendRequest(history, query);

  console.log(aiResponse.body);
  return new Response(JSON.stringify(aiResponse), {
    headers: {
      "content-type": "application/json"
    }
  }); 
})