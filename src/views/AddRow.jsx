import { useState } from "react";
import "./AddRow.scss"

function FormSection({ title, defaultState ,children }) {
    const [isActive, setIsActive] = useState(defaultState);

    return (
        <div className="accordion">
            <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <div>{title}</div>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                {
                    isActive && 
                    <div className="accordion-content">
                        {children}
                    </div>
                }
            </div>
        </div>
    )
}

function FormItem({title, name, type, form, setForm}) {

    function change(event) {
        setForm((prev) => {
            return {
                ...prev,
                [event.target.id]: event.target.value,
            };
        });
    }

    return (
        <div>
            <label htmlFor="">Text</label>
            <input id="" name="" type="text"/>
        </div>
    );
}

export default function AddRow() {
    const [form, setForm] = useState({
        a: "b"
    });

    function onSubmit(e) {
        e.preventDefault();
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
            <div className="add-row">
                <div className="add-row-header">

                </div>

                <form onSubmit={onSubmit}>
                    <FormSection title="Root" defaultState={true}>
                        <FormItem/>
                    </FormSection>
                    <input type="submit" value="submit" />
                </form>
            </div>
        </main>
    );
}