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

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/add">
          <Form />
        </Route>
        <Route exact path="/deck">
          <Deck />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
