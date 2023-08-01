import React from "react"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const linkStyles = {
    display: "inline-block",
    width: "100px",
    padding: "12px",
    margin: "6px 6px 6px",
    background: "green",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return (
        <div className="navbar">
            <NavLink 
                to="/" 
                exact
                style={linkStyles}
                activeStyle={{
                  background: "darkgreen",
                }}
            >
                Home
            </NavLink>
            <NavLink 
                to="/add" 
                exact
                style={linkStyles}
                activeStyle={{
                  background: "darkgreen",
                }}
            >
                Add a Card
            </NavLink>
            <NavLink 
                to="/deck" 
                exact
                style={linkStyles}
                activeStyle={{
                  background: "darkgreen",
                }}
            >
                Deck
            </NavLink>
        </div>
    )
}

export default NavBar