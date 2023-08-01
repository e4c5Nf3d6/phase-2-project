import React from "react";
import Container from "./Container"

function Deck({ cards, onAddOrRemove }) {
    return (
        <div>
            <Container cards={cards} onAddOrRemove={onAddOrRemove} />
        </div>
    )
}

export default Deck