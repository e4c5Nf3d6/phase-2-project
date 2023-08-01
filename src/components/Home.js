import React from "react";
import Filter from "./Filter"
import Container from "./Container"

function Home({ cards, onAddOrRemove }) {
    return (
        <div>
            <Filter />
            <Container cards={cards} onAddOrRemove={onAddOrRemove} />
        </div>
    )
}

export default Home