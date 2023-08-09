import React from "react";
import Select from "react-select"

function SelectOption({ multi, name, options, selected, onHandleChange }) {
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