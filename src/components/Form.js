import React from "react";
import useHandleInputData from "../hooks/useHandleInputData";
import SelectOption from "./SelectOption";

function Form({ onSubmitCard, formData, onSetFormData }) {
    const { inputData, handleChange, selectType, selectColors, selectTransforms, resetData } = useHandleInputData({
        selectedColors: [],
        selectedType: null,
        transforms: false
    }, formData, onSetFormData)

    function handleSubmit(e) {
        e.preventDefault()
        onSubmitCard(formData)
        resetData()
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    placeholder="Type Card Name"
                    value={formData.name}
                    onChange={e => handleChange(e)}
                    required
                />
                <label htmlFor="image">Image</label>
                <input 
                    type="text"
                    id="image"
                    placeholder="Type Image URL"
                    value={formData.image}
                    onChange={e => handleChange(e)}
                    required
                />
                <div>
                    <input 
                        type="checkbox" 
                        id="transforms" 
                        checked={inputData.transforms}  
                        onChange={selectTransforms} 
                    />
                    <label htmlFor="add">This Card Transforms</label>                    
                </div>
                {inputData.transforms ?
                    <div>
                        <label htmlFor="transformed">Transformed Image</label>
                        <input 
                            type="text"
                            id="transformed"
                            placeholder="Type transformed image url here"
                            value={formData.transformed}
                            onChange={e => handleChange(e)}
                            required={inputData.transforms}
                        />
                    </div>
                    : 
                    null
                }   
                <label htmlFor="type">Type</label>
                <SelectOption 
                    id="type" 
                    name="type"
                    onHandleChange={selectType} 
                    selected={inputData.selectedType} 
                    multi={false}
                    options={[
                        { value: 'creature', label: 'Creature' },
                        { value: 'planeswalker', label: 'Planeswalker' },
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
                    onHandleChange={selectColors} 
                    selected={inputData.selectedColors} 
                    multi={true}
                    options={[
                        { value: 'black', label: 'Black' },
                        { value: 'blue', label: 'Blue' },
                        { value: 'green', label: 'Green' },
                        { value: 'red', label: 'Red' },
                        { value: 'white', label: 'White' }
                    ]}
                />
                <div>
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