import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        type: "",
        colors: [],
        main: false
    })

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        setFormData({
            name: "",
            image: "",
            type: "",
            colors: [],
            main: false
        })
    }

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value

        setFormData({
            ...formData,
            [key]: value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    placeholder="Type card name here"
                    value={formData.name}
                    onChange={e => handleChange(e)}
                    required
                />
                <label htmlFor="image">Image</label>
                <input 
                    type="text"
                    id="image"
                    placeholder="Type image url here"
                    value={formData.image}
                    onChange={e => handleChange(e)}
                    required
                />
                <input type="submit" value="Submit Card" />
            </form>
        </div>
    )
}

export default Form