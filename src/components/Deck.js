import React from "react";
import Container from "./Container"

function Deck({ cards }) {
    return (
        <div>
            <Container cards={cards} />
        </div>
    )
}

export default Deck