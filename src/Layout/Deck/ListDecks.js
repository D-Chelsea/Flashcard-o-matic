import React, {useState, useEffect} from "react";
import {Link, useHistory, useRouteMatch, useParams} from "react-router-dom";
import { deleteDeck, readDeck } from "../../utils/api/index";
import ListCards from "./ListCards";

function ListDecks() {
  const {url} = useRouteMatch();
  const {deckId} = useParams();
  
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    async function getDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    getDeck();
    }, [deckId]);

  if (!deck) return null;
  return (
    <div> 
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{deck.name}</h5>
            <p className="card-text">{deck.description}</p>
            <div className="d-flex justify-content-between">
              <div>
                <Link to={`${url}/edit`} className="btn btn-secondary mr-1">Edit</Link>
                <Link to={`${url}/study`} className="btn btn-primary mr-1">Study</Link>
                <Link to={`${url}/cards/new`} className="btn btn-primary"><strong>+ Add Cards</strong></Link>
              </div>
              <div>
                <button className="btn btn-danger" onClick={() => {
                        if (window.confirm("Are you sure you want to delete this deck?")) {
                          deleteDeck(deck.id);
                          useHistory.push("/");
                        } else {
                          useHistory.push(`${url}`);
                        }
                      }
                    }>
                      Delete
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="container">
        <h1>Cards</h1>
        <ListCards cards={deck.cards}/>
      </div>
    </div>
    </div>
  )
  
}

export default ListDecks