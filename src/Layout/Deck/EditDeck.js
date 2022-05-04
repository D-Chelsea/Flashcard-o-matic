import React, {useState, useEffect} from 'react'
import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import Navbar from "./NavBar";




function EditDeck(){
    // const initialFormState = {
    //     name: "",
    //     description: "",
    // }

    // const [newDeck, setNewDeck] = useState(initialFormState);

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     const response = await createDeck(newDeck);
    //     useHistory.push(`/decks/${response.id}`);
    // }

    // const handleChange = (event) => {
    //     setNewDeck({...newDeck, [event.target.name]: event.target.value});
    // };
    const [deck, setDeck] = useState([]);
    const {url} = useRouteMatch();
    const {deckId} = useParams();

    useEffect(() => {
        async function getDeck() {
          const response = await readDeck(deckId);
          setDeck(response);
        }
        getDeck();
    }, [deckId]);
    console.log(deck)

        
  return (
      <div className="col-0 mx-auto">
          <div>
          </div>
          <header>
              <h2>Edit Deck</h2>
          </header>
          <div className="card">
            <div className="card-body">
                <form>
                    <div>
                        <label>Name:</label><br />
                        <input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Deck Name"
                            onChange=""
                            value=""
                            style={{width: "100%"}}
                        />
                    </div>
                    <br />
                    <div>
                        <label>description:</label><br />
                        <textarea 
                            id="description"
                            type="textarea"
                            name="description"
                            rows="3"
                            placeholder="Brief description of the deck"
                            onChange=""
                            value=""
                            style={{width: "100%"}}
                        />
                    </div>
                    <Link to="/" className="btn btn-secondary mr-3">
                        Cancel
                    </Link>
                    <button
                        className="btn btn-primary" type="submit" onClick="">Submit
                    </button>
                </form>
            </div>
          </div>
      </div>
  )
}

export default EditDeck