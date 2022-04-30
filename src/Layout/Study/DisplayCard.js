import React, {useState, useEffect} from "react";
import {Link, useRouteMatch, useHistory, useParams} from "react-router-dom";
import { readDeck } from "../../utils/api"; //make sure the tests want the read decks or pass as parameters
import NotEnoughCards from "./NotEnoughCards";



function DisplayCard({deck, deckId}) {

    const [card, setCard]= useState(0)
    const [flip, setFlip] = useState(true)

    const handleNext = function handleNext() {
        setFlip(true)
        if (card === deck.cards.length -1){
            window.confirm("Click OK to restart the deck.") 
            ? setCard(() => 0) : useHistory.push("/")
        } else{
            setCard((card) => card +1)
        }
    }
    //when i get back to working on this, I want to make an if statement here to run the notenoughcards frist in order for the test to catch it.
    return (
        <div>
            {deck.cards && deck.cards.length  &&
                <div className="row justify-content-center">
                     <div className="col">
                         <div className="card">
                            <div className="card-body">
                    
                                {deck.cards.length < 3 ? 

                                 <div>
                                    <NotEnoughCards deck={deck}/>
                                </div>
                                 :
                                <div>
                                    <h5 className="card-title">Card {card +1} of {deck.cards.length}</h5>
                                    <p className="card-text">{flip ? deck.cards[card].front : deck.cards[card].back}</p>
                                     <button className="btn btn-secondary mx-2" onClick={() => setFlip(!flip)}>Flip</button>
                                    {!flip ? <button className="btn btn-primary" onClick={handleNext}>Next</button>: null}
                                </div>
                                } 
                            </div>
                         </div>
                    </div>
                 </div>
                }
              </div>
        )

}

export default DisplayCard;