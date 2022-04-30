import React, {useState, useEffect} from "react";
import {Link, useRouteMatch, useHistory, useParams} from "react-router-dom";
import { readDeck } from "../../utils/api";



function DisplayCard({deck, deckId}) {

    const [card, setCard]= useState(0)
    const [flip, setFlip] = useState(true)

    const handleNext = function handleNext() {
        if (card === deck.cards.length -1){
            window.confirm("Click OK to restart the deck.") 
            ? setCard(() => 0) : useHistory.push("/")
        } else{
            setCard((card) => card +1)
        }
    }

    return (
        <div className="row justify-content-center">
            <div className="col">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card {card +1} of {deck.cards.length}</h5>
                    <p className="card-text">{flip ? deck.cards[card].front : deck.cards[card].back}</p>
                    <button id="previous" className="btn btn-primary">Previous</button>
                    <button className="btn btn-secondary mx-2" onClick={() => setFlip(!flip)}>Flip</button>
                    <button className="btn btn-primary" onClick={handleNext}>Next</button>
                </div>
                </div>
            </div>
        </div>
    )

}

export default DisplayCard;