import React from "react"
import { Link } from "react-router-dom";

function Navbar({deck}){
  console.log(deck)
    //TODO: I want to be able to import the deck name to show in the nav

    return (
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}> Home</Link>
            </li>

            <li className="breadcrumb-item active">
              <p>{deck.name}</p>
            </li>
          </ol>
        </nav>
    )
}

export default Navbar