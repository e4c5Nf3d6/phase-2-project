import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import AddCard from "./AddCard"
import Deck from "./Deck"

function App() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/cards")
        .then(r => r.json())
        .then(data => setCards(data))
    }, [])

    function addOrRemove(card) {
        fetch(`http://localhost:3000/cards/${card.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ main: !card.main })
        })
        .then(r => r.json())
        .then(data => {
            setCards(cards.map(card => {
                if (card.id === data.id) {
                    return data
                } else return card
            }))
        })
    }

    const deck = cards.filter(card => card.main === true)

    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home 
                        cards={cards} 
                        onAddOrRemove={addOrRemove} 
                    />
                </Route>
                <Route exact path="/add">
                    <AddCard 
                        cards={cards} 
                        onSetCards={setCards}
                    />
                </Route>
                <Route exact path="/deck">
                    <Deck 
                        cards={deck} 
                        onAddOrRemove={addOrRemove} 
                    />
                </Route>
            </Switch>
        </div>
    )
}

export default App;
