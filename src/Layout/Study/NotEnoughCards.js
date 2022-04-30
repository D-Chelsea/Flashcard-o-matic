import React from "react";

function NotEnoughCards({deck}){
    return (
        
        <div>
        <h1>Not enough cards.</h1>
            {deck.cards &&
            <div>
                <h5 className="card-title">{deck.name}: Study</h5>
                <p>You need at least 3 cards to study. there are only {deck.cards.length} in this deck</p>
            </div> 
            }
        </div>
    )
}

export default NotEnoughCards