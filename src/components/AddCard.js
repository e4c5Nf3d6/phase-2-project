import React, { useEffect, useState } from "react"
import useDocumentTitle from "../hooks/useDocumentTitle"
import Form from "./Form"
import CardDisplay from "./CardDisplay"

function AddCard({ cards, onSetCards }) {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        transformed: "",
        type: "",
        colors: [],
        main: false
    })
    const [message, setMessage] = useState({
        visible: false,
        class: "",
        content: ""
    })

    useDocumentTitle("Add a Card")

    useEffect(() => {
        let timeout
        if (message) {
            timeout = setTimeout(() => {
                setMessage({ visible: false, content: "" })
            }, 3000)
        }
        return () => clearTimeout(timeout)
    }, [message])

    function submitCard() {
        fetch(`http://localhost:3000/cards`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(data => {
            onSetCards([...cards, data])
            setMessage({ 
                visible: true, 
                class: "success",
                content: "Submission Successful!"
            })
        })
        .catch(() => setMessage({ 
            visible: true, 
            class: "failure",
            content: "Something Went Wrong"
        }))
    }

    return(
        <div>
            <div className="header">
                <h1>Add a Card</h1>
            </div>               
            <div className="column1">
                <Form 
                    onSubmitCard={submitCard} 
                    formData={formData}
                    onSetFormData={setFormData}
                />
            </div>
            <div className="column2 ui cards">
                <CardDisplay card={formData} preview={true} />
            </div>
            {message.visible ? 
                <div className={message.class === "success" ? "success" : "failure"}>
                    <h2>{message.content}</h2>
                </div>
                :
                null
            }   
        </div>
    )
}

export default AddCard