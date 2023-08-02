import React, { useState } from "react";
import SelectOption from "./SelectOption";

function Filter({ filterData, onSetFilterData }) {
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedType, setSelectedType] = useState(null)

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value

        onSetFilterData({
            ...filterData,
            [key]: value
        })
    }

    function handleTypeChange(type) {
        onSetFilterData({
            ...filterData,
            type: type ? type.value : "all"
        })
        setSelectedType(type)
    }

    function handleColorChange(colors) {
        onSetFilterData({
            ...filterData,
            colors: colors.map(color => color.value)
        })
        setSelectedColors(colors)
    }

    return (
        <div>
            <form>
                <label htmlFor="search">Search for Cards</label>
                <input 
                    id="search" 
                    type="text" 
                    placeholder="Search..." 
                    value={filterData.search}
                    onChange={handleChange}
                />
                <label htmlFor="type">Filter by Type</label>
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
                <label htmlFor="colors">Filter by Colors</label>
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
            </form>
        </div>
    )
}

export default Filter