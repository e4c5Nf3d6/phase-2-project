import React from "react";
import Select from "react-select"

function SelectType({ type, onHandleTypeChange }) {
    return(
        <Select 
            name="type"
            value={type}
            options={[
                { value: 'creature', label: 'Creature' },
                { value: 'sorcery', label: 'Sorcery' },
                { value: 'instant', label: 'Instant' },
                { value: 'artifact', label: 'Artifact' },
                { value: 'enchantment', label: 'Enchantment' },
                { value: 'land', label: 'Land' }
            ]}
            className="basic-select"
            classNamePrefix="select"
            onChange={e => onHandleTypeChange(e)}
            required
        />
    )
}

export default SelectType