import React from "react"
import Select from "react-select"

function SelectOption({ name, options, selected, onHandleChange, multi=true }) {
    return(
        <Select 
            isMulti={multi}
            isClearable
            placeholder={`Select ${name[0].toUpperCase() + name.slice(1)}`}
            name={name}
            value={selected}
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={onHandleChange}
            required={!multi}
        />
    )
}

export default SelectOption