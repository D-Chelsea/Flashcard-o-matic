
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateCard, readDeck, readCard } from "../../utils/api/index";

function EditCard(){
    const [deck, setDeck] = useState([]);
    const [card, setCard] = useState({ front: "", back: "", deckId: "" });
    const { deckId, cardId } = useParams();
    const history = useHistory();
  
    useEffect(() => {
      const abortController = new AbortController();
  
      const cardInfo = async () => {
        const response = await readCard(cardId, abortController.signal);
        setCard(() => response);
      };
      cardInfo();
      return () => abortController.abort();
    }, [cardId]);
  
    useEffect(() => {
      const abortController = new AbortController();
  
      const deckInfo = async () => {
        const response = await readDeck(deckId, abortController.signal);
        setDeck(() => response);
      };
  
      deckInfo();
      return () => abortController.abort();
    }, [deckId]);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      await updateCard(card);
      history.push(`/decks/${deck.id}`);
    };
  
    function handleFront(e) {
      setCard({ ...card, front: e.target.value });
    }
    function handleBack(e) {
      setCard({ ...card, back: e.target.value });
    }
 
  
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>{deck.name}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Card
            </li>
          </ol>
        </nav>
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-body">
              <div className="form-group">
                <label><strong>Front:</strong></label><br />
                <textarea
                className="form-control"
                id="front"
                placeholder="Front side of card"
                value={card.front}
                onChange={handleFront}
                style={{width: "100%"}}>
                </textarea>
              </div>
              <div className="form-group">
                <label><strong>Back:</strong></label><br />
                <textarea
                className="form-control"
                id="front"
                placeholder="Back side of card"
                value={card.back}
                onChange={handleBack}
                style={{width: "100%"}}>
                </textarea>
              </div>
              <button className="btn btn-primary">Submit</button>
              <button className="btn btn-secondary mx-1">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    );

  
}

export default EditCard