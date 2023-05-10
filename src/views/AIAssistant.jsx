import {useState} from "react"
import { supabase } from "../state/supabase";
import Spinner from "../components/Spinner"
import "./MainGrid.scss"
import "./AIAssistant.scss"

export default function AIAssistant() {
    const [history, setHistory] = useState([
        // {role: "user", content: "what's 4+4"},
        // {role: "assistant", content: "8"}
    ]);

    const [form, setForm] = useState({
        query: ""
    });

    const [lockInput, setLockInput] = useState(false);

    const historyComponents = history.map((item) => {
        let roleTitle = (item.role.charAt(0).toUpperCase() + item.role.slice(1));
        return (
            <div className={"card " + item.role}>
                <span className="bold">{roleTitle} </span>
                : {item.content}
            </div>
        )
    }).reverse();

    async function onSubmit(e) {
        setLockInput(true);
        e.preventDefault();

        const { data, error } = await supabase.functions.invoke('ai-assistant', {
            body: { query: form.query, history },
        })

        if (error) {
            console.error(error);
            setForm(prev => ({...prev, query: JSON.stringify(error)}))
            return;
        }

        setLockInput(false);

        setHistory(data.new_history);
    }

    function change(event) {
        setForm((prev) => {
            return {
                ...prev,
                [event.target.id]: event.target.value,
            };
        });
    }

    return (
        <main className="main">
            <div className="ai-assistant">
                <div className="card">
                    <h1>
                        AI Assistant
                    </h1>
                    <p>
                        Powered by GPT-3.5-Turbo/ChatGPT ask an AI assistant questions
                        about the data contained within the database and receive natural
                        language feedback and responses!
                    </p>

                    <p>
                        Currently the AI assistant isn't being given rows from the database 
                        with which it can respond to questions, so it isn't particularly useful
                        until then the experience is the same as using the official ChatGPT website.
                    </p>

                    <form onSubmit={onSubmit}>
                        <textarea id="query" className="card" value={form.query} onChange={change}/>
                        {lockInput ? <Spinner/> : <input type="submit" value="submit"/>}
                    </form>

                    <div className="conversation-history">
                        {historyComponents}
                    </div>


                </div>
            </div>
        </main>
    )
}