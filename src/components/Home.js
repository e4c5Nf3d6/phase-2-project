import React from "react";
import Filter from "./Filter"
import Container from "./Container"

function Home({ cards }) {
    return (
        <div>
            <Filter />
            <Container cards={cards} />
        </div>
    )
}

export default Home