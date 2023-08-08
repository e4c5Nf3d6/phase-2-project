import React, { useState } from "react";
import SelectOption from "./SelectOption";

function Form({ onSubmitCard, formData, onSetFormData }) {
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedType, setSelectedType] = useState(null)
    const [transforms, setTransforms] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        onSubmitCard(formData)
        onSetFormData({
            name: "",
            image: "",
            transformed: "",
            type: "",
            colors: [],
            main: false
        })
        setSelectedColors([])
        setSelectedType("")
        setTransforms(false)
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
                        id="transforms" 
                        checked={transforms} 
                        onChange={e => setTransforms(e.target.checked)} 
                    />
                    <label htmlFor="add">This Card Transforms</label>                    
                </div>
                {transforms ?
                    <div>
                        <label htmlFor="transformed">Transformed Image</label>
                        <input 
                            type="text"
                            id="transformed"
                            placeholder="Type transformed image url here"
                            value={formData.transformed}
                            onChange={e => handleChange(e)}
                            required={transforms}
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