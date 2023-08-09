import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Form from "./Form";
import CardDisplay from "./CardDisplay";

function AddCard({ message, onSubmitCard }) {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        transformed: "",
        type: "",
        colors: [],
        main: false
    })

    useDocumentTitle("Add a Card")

    return(
        <div>
            <div className="header">
                <h1>Add a Card</h1>
            </div>               
            <div className="column1">
                <Form 
                    onSubmitCard={onSubmitCard} 
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