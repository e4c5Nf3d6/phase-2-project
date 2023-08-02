import React from "react";
import Container from "./Container"

function Deck({ cards, onAddOrRemove }) {
    return (
        <div id="deck">
            <div className="sectionheader">
                <span><h1>Creatures</h1></span>
                <span><h1 className="floatright">{cards.filter(card => card.type === "creature").length}</h1></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "creature")} onAddOrRemove={onAddOrRemove} />

            <div className="sectionheader">
                <span><h1>Sorceries</h1></span>
                <span><h1 className="floatright">{cards.filter(card => card.type === "sorcery").length}</h1></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "sorcery")} onAddOrRemove={onAddOrRemove} />

            <div className="sectionheader">
                <span><h1>Instants</h1></span>
                <span><h1 className="floatright">{cards.filter(card => card.type === "instant").length}</h1></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "instant")} onAddOrRemove={onAddOrRemove} />

            <div className="sectionheader">
                <span><h1>Artifacts</h1></span>
                <span><h1 className="floatright">{cards.filter(card => card.type === "artifact").length}</h1></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "artifact")} onAddOrRemove={onAddOrRemove} />

            <div className="sectionheader">
                <span><h1>Enchantments</h1></span>
                <span><h1 className="floatright">{cards.filter(card => card.type === "enchantment").length}</h1></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "enchantment")} onAddOrRemove={onAddOrRemove} />

            <div className="sectionheader">
                <span><h1>Lands</h1></span>
                <span><h1 className="floatright">{cards.filter(card => card.type === "land").length}</h1></span>                
            </div>
            <Container cards={cards.filter(card => card.type === "land")} onAddOrRemove={onAddOrRemove} />
        </div>
    )
}

export default Deck