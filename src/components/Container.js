import React from "react";
import Card from "./Card";

function Container({ cards, onAddOrRemove }) {

    const cardList = cards.map(card => {
        return <Card key={card.id} card={card} onAddOrRemove={onAddOrRemove} />
    })

    return (
        <div className="ui cards">
            {cardList}
        </div>
    )
}

export default Container