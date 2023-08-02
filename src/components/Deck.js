import React from "react";
import Container from "./Container"

function Deck({ cards, onAddOrRemove }) {
    return (
        <div id="deck">
            <h1>Creatures</h1>
            <Container cards={cards.filter(card => card.type === "creature")} onAddOrRemove={onAddOrRemove} />

            <h1>Sorceries</h1>
            <Container cards={cards.filter(card => card.type === "sorcery")} onAddOrRemove={onAddOrRemove} />

            <h1>Instants</h1>
            <Container cards={cards.filter(card => card.type === "instant")} onAddOrRemove={onAddOrRemove} />

            <h1>Artifacts</h1>
            <Container cards={cards.filter(card => card.type === "artifact")} onAddOrRemove={onAddOrRemove} />

            <h1>Enchantments</h1>
            <Container cards={cards.filter(card => card.type === "enchantment")} onAddOrRemove={onAddOrRemove} />

            <h1>Lands</h1>
            <Container cards={cards.filter(card => card.type === "land")} onAddOrRemove={onAddOrRemove} />
        </div>
    )
}

export default Deck