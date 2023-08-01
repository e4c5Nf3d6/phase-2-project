import React from "react";

function Card({ image, name }) {
    return (
        <div className="card">
            <div className="content">
                <div className="image">
                    <img className="ui fluid image" src={image} alt={name} />
                </div>
                <br />
                <div className="header">
                    {name}
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