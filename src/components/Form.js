import React, { useState } from "react";
import SelectOption from "./SelectOption";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        type: "",
        colors: [],
        main: false
    })
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedType, setSelectedType] = useState("")

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
        setSelectedType("")
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

    function handleTypeChange(type) {
        setFormData({
            ...formData,
            type: type.value
        })
        setSelectedType(type)
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
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
                <SelectOption 
                    id="type" 
                    name="type"
                    onHandleChange={handleTypeChange} 
                    selected={selectedType} 
                    multi={false}
                    options={[
                        { value: 'creature', label: 'Creature' },
                        { value: 'sorcery', label: 'Sorcery' },
                        { value: 'instant', label: 'Instant' },
                        { value: 'artifact', label: 'Artifact' },
                        { value: 'enchantment', label: 'Enchantment' },
                        { value: 'land', label: 'Land' }
                    ]} 
                />
                <label htmlFor="colors">Colors</label>
                <SelectOption
                    id="colors" 
                    name="colors"
                    onHandleChange={handleColorChange} 
                    selected={selectedColors} 
                    multi={true}
                    options={[
                        { value: 'black', label: 'Black' },
                        { value: 'blue', label: 'Blue' },
                        { value: 'green', label: 'Green' },
                        { value: 'red', label: 'Red' },
                        { value: 'white', label: 'White' }
                    ]}
                />
                <input type="submit" value="Submit Card" />
            </form>
        </div>
    )
}

export default Form