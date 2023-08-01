import React from "react";

function Card() {
    return (
        <div class="card">
            <div class="content">
                <div class="image">
                    <img class="ui fluid image" src="https://cards.scryfall.io/large/front/7/a/7aead6a8-bada-42cf-b7cc-0b730f564582.jpg?1644888719" />
                </div>
                <br />
                <div class="header">
                    Umbris, Fear Manifest
                </div>
            </div>
            <div class="extra content">
                <div class="ui bottom attached button">
                    <i class="add icon"></i>
                    Add to Deck
                </div>
            </div>
        </div>
    )
}

export default Card