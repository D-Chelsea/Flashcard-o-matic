import React from "react";
import { Link, useParams } from "react-router-dom";

function NotEnoughCards({deck}){
     const { deckId } = useParams();
     
    return (
        
        <div>
          <div className="card-body">
            <h5 className="card-title">Not enough cards.</h5>
            <p className="card-text">
              You need at least 3 cards to study. There are {deck.cards.length} cards
              in this deck.
            </p>

            <Link
              to={`/decks/${deckId}/cards/new`}
              className="btn btn-primary"
            >
              Add Cards
            </Link>
          </div>
        </div>
    )
}

export default NotEnoughCards