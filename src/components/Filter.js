import React from "react";

function Filter({ filterData, onFilterCards }) {

    function handleChange(e) {
        const key = e.target.id
        const value = e.target.value

        onFilterCards({
            ...filterData,
            [key]: value
        })
    }

    return (
        <div>
            <form>
                <input 
                    id="search" 
                    type="text" 
                    placeholder="Search..." 
                    value={filterData.search}
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default Filter