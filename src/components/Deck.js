import React from "react";
import Section from "./Section";

import green from "../media/green.png"
import blue from "../media/blue.png"
import black from "../media/black.png"
import red from "../media/red.png"
import white from "../media/white.png"

function Deck({ cards, onAddOrRemove }) {

    const deckColors = []
    for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards[i].colors.length; j++) {
            if (!deckColors.includes(cards[i].colors[j])) {
                deckColors.push(cards[i].colors[j])
            }
        }
    }

    const icons = deckColors.sort().map(color => {
        switch (color) {
            case "green":
                return <img key="green" className="icon" src={green} alt="green" />
            case "blue":
                return <img key="blue" className="icon" src={blue} alt="blue" />
            case "black":
                return <img key="black" className="icon" src={black} alt="black" />
            case "white":
                return <img key="white" className="icon" src={white} alt="white" />
            case "red":
                return <img key="red" className="icon" src={red} alt="red" />
        }
    })

    return (
        <div id="deck">
            <div id="deckheader">
                <h1 className="decktitle">My Deck</h1>
                <div className="decksubtitle">
                    <span>{icons}</span>                        
                    <span><h3>{cards.length} Cards</h3></span>
                </div>       
            </div>

            <Section 
                title={"Creatures"}
                cards={cards.filter(card => card.type === "creature")} 
                onAddOrRemove={onAddOrRemove}
            />
            <Section 
                title={"Sorceries"}
                cards={cards.filter(card => card.type === "sorcery")} 
                onAddOrRemove={onAddOrRemove}
            />
            <Section 
                title={"Instants"}
                cards={cards.filter(card => card.type === "instant")} 
                onAddOrRemove={onAddOrRemove}
            />
            <Section 
                title={"Artifacts"}
                cards={cards.filter(card => card.type === "artifact")} 
                onAddOrRemove={onAddOrRemove}
            />
            <Section 
                title={"Enchantments"}
                cards={cards.filter(card => card.type === "enchantment")} 
                onAddOrRemove={onAddOrRemove}
            />
            <Section 
                title={"Lands"}
                cards={cards.filter(card => card.type === "land")} 
                onAddOrRemove={onAddOrRemove}
            />
        </div>
    )
}

export default Deck