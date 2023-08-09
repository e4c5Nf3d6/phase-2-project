import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import AddCard from "./AddCard"
import Deck from "./Deck";

function App() {
  const [cards, setCards] = useState([])
  const [message, setMessage] = useState({
    visible: false,
    class: "",
    content: ""
  })

  useEffect(() => {
    fetch("http://localhost:3000/cards")
    .then(r => r.json())
    .then(data => setCards(data))
  }, [])

  useEffect(() => {
    let timeout
    if (message) {
      timeout = setTimeout(() => {
        setMessage({ visible: false, content: "" })
      }, 3000)
    }
    return () => clearTimeout(timeout)
  }, [message])

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

  function submitCard(card) {
    fetch(`http://localhost:3000/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    })
    .then(r => r.json())
    .then(data => {
      setMessage({ 
        visible: true, 
        class: "success",
        content: "Submission Successful!"
      })
      setCards([...cards, data])
    })
    .catch(() => setMessage({ 
      visible: true, 
      class: "failure",
      content: "Something Went Wrong"
    }))
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
            onSubmitCard={submitCard} 
            message={message}
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
  );
}

export default App;
