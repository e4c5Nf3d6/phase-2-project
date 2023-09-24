import React from "react"
import CardDisplay from "./CardDisplay"

function Container({ cards, onAddOrRemove }) {
    const sortedCards = cards.sort((a, b) => (a.name > b.name) ? 1 : -1)

    const cardList = sortedCards.map(card => {
        return <CardDisplay key={card.id} card={card} onAddOrRemove={onAddOrRemove} />
    })

    return (
        <div className="ui cards">
            {cardList}
        </div>
    )
}

export default Container