import "./MainGrid.scss"
import "./AIAssistant.scss"

export default function AIAssistant() {
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

                    <form>
                        <textarea className="card"/>
                        <input type="submit" value="submit"/>
                    </form>
                </div>
            </div>
        </main>
    )
}