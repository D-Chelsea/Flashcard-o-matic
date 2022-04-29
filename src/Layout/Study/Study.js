
import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import Navbar from "./Navbar";
import DisplayCard from "./DisplayCard";


function Study() {
  const [deck, setDeck] = useState({});
  const { deckId } = useParams();

  useEffect(() => {
    async function fetchDecks() {
      const response = await readDeck(deckId);
      const deckFromAPI = await response
      console.log(deckFromAPI)
      setDeck(deckFromAPI);
    }
    fetchDecks();
  }, [deckId]);


    return (
      <div className="col">
        <Navbar deckId ={deckId} deck={deck} />
        <DisplayCard deck={deck} />
      </div>
    );
}

export default Study