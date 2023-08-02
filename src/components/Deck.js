import React from "react";
import Container from "./Container"

function Deck({ cards, onAddOrRemove }) {

    const deckColors = []
    for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards[i].colors.length; j++) {
            if (!deckColors.includes(cards[i].colors[j])) {
                deckColors.push(cards[i].colors[j])
            }
        }
    }

    return (
        <div id="deck">
            <div id="deckheader">
                <h1 className="decktitle">My Deck</h1>
                <div>
                    <h3 id="decksubheader">Total Cards: {cards.length}</h3> 
                    <h3 id="decksubheader">Deck Colors: {deckColors.join(", ")}</h3>
                </div>        
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