import React from "react";
import Card from "./Card";

function Container({ cards }) {

    const cardList = cards.map(card => {
        return <Card key={card.id} image={card.image} name={card.name} />
    })

    return (
        <div className="ui cards">
            {cardList}
        </div>
    )
}

export default Container