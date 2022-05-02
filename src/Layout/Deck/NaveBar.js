import React from "react"
import { Link } from "react-router-dom";

function Navbar({deckId, deck}){

    //TODO: I want to be able to import the deck name to show in the nav

    return (
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}> Home</Link>
            </li>

            <li className="breadcrumb-item active">
              Create Deck
            </li>
          </ol>
        </nav>
    )
}

export default Navbar