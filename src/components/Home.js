import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Filter from "./Filter"
import Container from "./Container"

function Home({ cards, onAddOrRemove }) {
    const [filterData, setFilterData] = useState({
        search: "",
        colors: [],
        type: 'all'
    })

    useDocumentTitle("Home")

    const filteredCards = cards.filter(card => {
        return card.name.toLowerCase().includes(filterData.search.toLowerCase())
    }).filter(card => {
        if (filterData.type === 'all') {
            return true
        } else {
            return card.type === filterData.type
        }
    }).filter(card => {
        let matches = true
        for (let i = 0; i < filterData.colors.length; i++) {
            if (!card.colors.includes(filterData.colors[i])) {
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
            />
            <Container 
                cards={filteredCards} 
                onAddOrRemove={onAddOrRemove}
            />
        </div>
    )
}

export default Home