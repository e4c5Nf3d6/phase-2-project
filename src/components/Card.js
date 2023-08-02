import React from "react";

function Card({ card, onAddOrRemove }) {

    return (
        <div className="card">
            <div className="content">
                <div className="image">
                    <img className="ui fluid image" src={card.image} alt={card.name} />
                </div>
                <br />
                <div className="header">
                    {card.name}
                </div>
            </div>
            <div className="extra content">
                {(card.main === false)
                    ?               
                    <div className="ui bottom attached button" onClick={() => onAddOrRemove(card)} >
                        <i className="add icon"></i>
                        Add to Deck
                    </div>
                    :
                    <div className="ui bottom attached button" onClick={() => onAddOrRemove(card)} >
                        <i className="minus icon"></i>
                        Remove from Deck
                    </div>
                }
            </div>
        </div>
    )
}

export default Card