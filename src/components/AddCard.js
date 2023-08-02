import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";

function AddCard({ onSubmitCard }) {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        transformed: "",
        type: "",
        colors: [],
        main: false
    })
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
                <Card card={formData} preview={true} />
            </div>
        </div>
    )
}

export default AddCard