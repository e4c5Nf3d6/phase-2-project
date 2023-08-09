import React, { useEffect, useState } from "react";
import Section from "./Section";

function Deck({ cards, onAddOrRemove }) {
    const [deckTitle, setDeckTitle] = useState("")
    const [editing, setEditing] = useState(false)
    const [iconImages, setIconImages] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/icons")
        .then(r => r.json())
        .then(data => setIconImages(data))
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/deck")
        .then(r => r.json())
        .then(data => setDeckTitle(data.name))
    }, [])

    function editTitle() {
        fetch(`http://localhost:3000/deck`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: deckTitle })
        })
        .then(r => r.json())
        .then(data => {
            setDeckTitle(data.name)
            setEditing(false)
        })
    }

    const deckColors = []
    for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards[i].colors.length; j++) {
            if (!deckColors.includes(cards[i].colors[j])) {
                deckColors.push(cards[i].colors[j])
            }
        }
    }

    const icons = deckColors.sort().map(color => {
        return <img key={color} className="icon" src={iconImages[color]} alt={color} />
    })

    return (
        <div id="deck">
            <div className="decktitle">
                {editing ? 
                    <input 
                        autoFocus
                        type="text" 
                        value={deckTitle}
                        onChange={e => setDeckTitle(e.target.value)}
                        onBlur={editTitle}
                    />
                    :
                    <h1 
                        className="decktitle"
                        onClick={() => setEditing(true)}
                    >
                    {deckTitle}
                    </h1>
                }
            </div>

            <div className="decksubtitle">
                <span>{icons}</span>                        
                <span><h3>{cards.length} Cards</h3></span>
            </div>   

            <Section 
                title={"Creatures"}
                cards={cards.filter(card => card.type === "creature")} 
                onAddOrRemove={onAddOrRemove}
            />
            <Section 
                title={"Planeswalkers"}
                cards={cards.filter(card => card.type === "planeswalker")} 
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