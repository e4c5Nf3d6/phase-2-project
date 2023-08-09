import React from "react";
import useHandleInputData from "../hooks/useHandleInputData";
import SelectOption from "./SelectOption";

function Filter({ filterData, onSetFilterData }) {
    const { inputData, handleChange, selectType, selectColors } = useHandleInputData({
        selectedType: null,
        selectedColors: []
    }, filterData, onSetFilterData)

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
                <label htmlFor="type">Filter Cards by Type</label>
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
                <label htmlFor="colors">Filter Cards by Colors</label>
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
            </form>
        </div>
    )
}

export default Filter