import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import Form from "./Form"
import Deck from "./Deck";

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cards")
    .then(r => r.json())
    .then(data => setCards(data))
  }, [])

  const deck = cards.filter(card => card.main === true)

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home cards={cards} />
        </Route>
        <Route exact path="/add">
          <Form />
        </Route>
        <Route exact path="/deck">
          <Deck cards={deck} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
