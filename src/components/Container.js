import React from "react";
import Card from "./Card";

function Container({ cards, onAddOrRemove }) {
    const sortedCards = cards.sort((a, b) => (a.name > b.name) ? 1 : -1)

    const cardList = sortedCards.map(card => {
        return <Card key={card.id} card={card} onAddOrRemove={onAddOrRemove} />
    })

    return (
        <div className="ui cards">
            {cardList}
        </div>
    )
}

export default Container