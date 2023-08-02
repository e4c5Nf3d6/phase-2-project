import React, { useState } from "react";
import Filter from "./Filter"
import Container from "./Container"

function Home({ cards, onAddOrRemove }) {
    const [filterData, setFilterData] = useState({
        search: "",
        colors: [],
        type: 'all'
    })
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedType, setSelectedType] = useState(null)

    const filteredBySearch = cards.filter(card => card.name.toLowerCase().includes(filterData.search.toLowerCase()))
    const filteredByType = filteredBySearch.filter(card => card.type.includes(selectedType ? selectedType.value : ""))
    const filteredByColor = filteredByType.filter(card => {
        let matches = true
        for (let i = 0; i < selectedColors.length; i++) {
            if (!card.colors.includes(selectedColors[i].value)) {
                matches = false
            }
        }
        return matches
    })

    return (
        <div>
            <Filter 
                filterData={filterData} 
                onSetFilterData={setFilterData} 
                selectedColors={selectedColors}
                onSetSelectedColors={setSelectedColors}
                selectedType={selectedType}
                onSetSelectedType={setSelectedType}
            />
            <Container 
                cards={filteredByColor} 
                onAddOrRemove={onAddOrRemove}
            />
        </div>
    )
}

export default Home