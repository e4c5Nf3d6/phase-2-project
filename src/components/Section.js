import React from "react"
import Container from "./Container"

function Section({ title, cards, onAddOrRemove }) {
    return (
        <div>
            <div className="sectionheader">
                <span><h2>{title}</h2></span>
                <span><h2>{cards.length}</h2></span>                
            </div>
            <Container cards={cards} onAddOrRemove={onAddOrRemove} />
        </div>
    )
}

export default Section