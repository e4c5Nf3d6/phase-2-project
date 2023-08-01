import React from "react";

function Card() {
    return (
        <div className="card">
            <div className="content">
                <div className="image">
                    <img className="ui fluid image" src="https://cards.scryfall.io/large/front/7/a/7aead6a8-bada-42cf-b7cc-0b730f564582.jpg?1644888719" alt="Umbris, Fear Manifest" />
                </div>
                <br />
                <div className="header">
                    Umbris, Fear Manifest
                </div>
            </div>
            <div className="extra content">
                <div className="ui bottom attached button">
                    <i className="add icon"></i>
                    Add to Deck
                </div>
            </div>
        </div>
    )
}

export default Card