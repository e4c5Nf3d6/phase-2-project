import React, { useState } from "react";
import Filter from "./Filter"
import Container from "./Container"

function Home({ cards, onAddOrRemove }) {
    const [filterData, setFilterData] = useState({
        search: "",
        colors: [],
        type: 'all'
    })

    function filterCards(updatedFilterData) {
        setFilterData(updatedFilterData)
    }

    const filteredCards = cards.filter(card => card.name.toLowerCase().includes(filterData.search.toLowerCase()))

    return (
        <div>
            <Filter filterData={filterData} onFilterCards={filterCards} />
            <Container cards={filteredCards} onAddOrRemove={onAddOrRemove} />
        </div>
    )
}

export default Home