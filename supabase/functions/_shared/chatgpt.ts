export const createMessage = (role: String, content: String) => ({role, content});

export const sendRequest = async (history: string[], message: string) => {
    let response = await postRequest("https://api.openai.com/v1/chat/completions", 
        Deno.env.get("OPENAI_API_KEY"), {
            model: "gpt-3.5-turbo",
            messages: [...history, createMessage("user", message)]
        }
    );

    console.log("response is: ", response);
    let generatedText = response.choices[0].message.content;

    return {
        response: generatedText,
        new_history: [
            ...history, 
            createMessage("user", message), 
            createMessage("assistant", generatedText)
        ]
    };
}

export const postRequest = async (url, key, body) => {
    console.log ("messages are: ", body);
    let res = await fetch(url, {
        body: JSON.stringify(body),
        headers: {
            "Authorization": `Bearer ${key}`,
            "Content-Type": "application/json"
        },
        method: "POST"
    });

    let json = await res.json();
    return json;
}

