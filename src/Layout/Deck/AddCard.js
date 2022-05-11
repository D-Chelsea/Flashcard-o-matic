import React, {useState, useEffect} from "react";
import {useHistory, useParams, Link} from "react-router-dom";
import { createCard, readDeck} from "../../utils/api/index";

function AddCard() {
  
  const history = useHistory();
  const {deckId} = useParams();
  const [deck, setDeck] = useState([]);
  const [front, setFront] = useState({"front": ""});
  const [back, setBack] = useState({"back": ""});


  
  useEffect(() => {
    async function deckInfo() {
        const abortController = new AbortController();
        try {
            const response = await readDeck(deckId, abortController.signal);
            setDeck(response);
        } catch (error) {
            console.error(error);
        }
        return () => {
            abortController.abort();
        };
    }
    deckInfo();
}, [deckId]);

  function handleFront(event) {
    setFront({...front, "front": event.target.value});
  }

  function handleBack(event) {
    setBack({...back, "back": event.target.value});
  }
 
  function handleCancel() {
    history.push(`/decks/${deckId}`);
  }


  function handleSubmit() {
    createCard(parseInt(deckId), {...front, ...back});
    setFront({"front": ""});
    setBack({"back": ""});
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
    <div className="card">
      <div className="card-body">
        <div>
          <h1>{`${deck.name}: Add Card`}</h1>
      <form>
        <div className="form-group">
          <label><strong>Front:</strong></label>
          <textarea 
            className="form-control" 
            id="front" rows="3" 
            placeholder="Front side of card" 
            value={front.front} 
            onChange={handleFront}>
          </textarea>
        </div>
        <div className="form-group">
          <label><strong>Back:</strong></label>
          <textarea 
            className="form-control" 
            id="back" rows="3" 
            placeholder="Back side of card" 
            value={back.back} 
            onChange={handleBack}></textarea>
        </div>
        
        <button 
          type="button"
          className="btn btn-secondary mr-1"
          onClick={handleCancel}>Cancel</button>

        <button 
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}>Submit</button>

      </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default AddCard