import React from "react";
import Select from "react-select"

function SelectColors({ selectedColors, onHandleColorChange }) {
    return(
        <Select 
            isMulti
            name="colors"
            value={selectedColors}
            options={[
                { value: 'black', label: 'Black', color: 'black' },
                { value: 'blue', label: 'Blue', color: 'blue' },
                { value: 'green', label: 'Green', color: 'green' },
                { value: 'red', label: 'Red', color: 'red' },
                { value: 'white', label: 'White', color: 'white' }
            ]}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={e => onHandleColorChange(e)}
            required
        />
    )
}

export default SelectColors