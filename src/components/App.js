import React from "react";
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar";
import Home from "./Home";
import Deck from "./Deck";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/deck">
          <Deck />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
