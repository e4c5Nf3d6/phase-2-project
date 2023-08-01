import React, { useState } from "react";
import SelectColors from "./SelectColors";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        type: "",
        colors: [],
        main: false
    })
    const [selectedColors, setSelectedColors] = useState([])

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
        setSelectedColors([])
    }

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value

        setFormData({
            ...formData,
            [key]: value
        })
    }

    function handleColorChange(colors) {
        setFormData({
            ...formData,
            colors: colors.map(option => option.value)
        })
        setSelectedColors(colors)
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
                <label htmlFor="type">Type</label>
                <select 
                    id="type"
                    value={formData.type} 
                    onChange={e => handleChange(e)}
                    required
                >
                    <option value="" disabled>Select Card Type</option>
                    <option value="creature">Creature</option>
                    <option value="sorcery">Sorcery</option>
                    <option value="instant">Instant</option>
                    <option value="artifact">Artifact</option>
                    <option value="enchantment">Enchantment</option>
                    <option value="land">Land</option>
                </select>
                <label htmlFor="colors">Colors</label>
                <SelectColors id="colors" onHandleColorChange={handleColorChange} selectedColors={selectedColors} />

                <input type="submit" value="Submit Card" />
            </form>
        </div>
    )
}

export default Form