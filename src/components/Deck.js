import React from "react";
import Container from "./Container"

function Deck({ cards, onAddOrRemove }) {
    return (
        <div id="deck">
            <div id="deckheader">
                <span>
                    <h1 className="decktitle">My Deck</h1></span>
                <span><h1>Total Cards — {cards.length}</h1></span>                
            </div>

            <div className="sectionheader">
                <span><h2>Creatures</h2></span>
                <span><h2>{cards.filter(card => card.type === "creature").length}</h2></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "creature")} onAddOrRemove={onAddOrRemove} />

            <div className="sectionheader">
                <span><h2>Sorceries</h2></span>
                <span><h2>{cards.filter(card => card.type === "sorcery").length}</h2></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "sorcery")} onAddOrRemove={onAddOrRemove} />

            <div className="sectionheader">
                <span><h2>Instants</h2></span>
                <span><h2>{cards.filter(card => card.type === "instant").length}</h2></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "instant")} onAddOrRemove={onAddOrRemove} />

            <div className="sectionheader">
                <span><h2>Artifacts</h2></span>
                <span><h2>{cards.filter(card => card.type === "artifact").length}</h2></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "artifact")} onAddOrRemove={onAddOrRemove} />

            <div className="sectionheader">
                <span><h2>Enchantments</h2></span>
                <span><h2>{cards.filter(card => card.type === "enchantment").length}</h2></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "enchantment")} onAddOrRemove={onAddOrRemove} />

            <div className="sectionheader">
                <span><h2>Lands</h2></span>
                <span><h2>{cards.filter(card => card.type === "land").length}</h2></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "land")} onAddOrRemove={onAddOrRemove} />
        </div>
    )
}

export default Deck