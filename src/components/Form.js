import React, { useState } from "react";
import SelectOption from "./SelectOption";

function Form({ onSubmitCard, formData, onSetFormData }) {
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedType, setSelectedType] = useState("")
    const [converts, setConverts] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        onSubmitCard(formData)
        onSetFormData({
            name: "",
            image: "",
            converted: null,
            type: "",
            colors: [],
            main: false
        })
        setSelectedColors([])
        setSelectedType("")
        setConverts(false)
    }

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        onSetFormData({
            ...formData,
            [key]: value
        })
    }

    function handleColorChange(colors) {
        onSetFormData({
            ...formData,
            colors: colors.map(option => option.value)
        })
        setSelectedColors(colors)
    }

    function handleTypeChange(type) {
        onSetFormData({
            ...formData,
            type: type ? type.value : ""
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
                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        id="converts" 
                        checked={converts} 
                        onChange={e => setConverts(e.target.checked)} 
                    />
                    <label htmlFor="add">This Card Converts</label>                    
                </div>
                {converts ?
                    <div>
                        <label htmlFor="converted">Converted Image</label>
                        <input 
                            type="text"
                            id="converted"
                            placeholder="Type converted image url here"
                            value={formData.converted}
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    : null
                }   
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
                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        id="main" 
                        checked={formData.main} 
                        onChange={handleChange} 
                    />
                    <label htmlFor="add">Add to Deck</label>                    
                </div>
                <input type="submit" value="Submit Card" />
            </form>
        </div>
    )
}

export default Form