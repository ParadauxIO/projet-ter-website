import 'xhr_polyfill'
import { serve } from 'std/server'
import { sendRequest } from '../_shared/chatgpt.ts'
import { corsHeaders } from '../_shared/cors.ts'

let rootPrompt = `
You are an assistant for a team of archeologists based in Swansea, Wales. 
You will respond to questions about data contained within a database. I 
will provide what I think to be the relevant data to you before every question.
Answer using only this, and as concisely as possible. 

Don't make use of tables or use any markdown syntax.
The data I provide will be as pipe-separated values, and I will explain 
the columns as they come up. 

For example: 
X|Y
1|2
means a column of X with a value of 1 and a column of Y with a value of 2.
Requests will be made in either English or French, always respond in the source
language.
`


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