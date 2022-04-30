
import React, { useState, useEffect } from "react";
import {useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";
import Navbar from "./Navbar";
import DisplayCard from "./DisplayCard";


function Study() {
  const [deck, setDeck] = useState([]);
  const { deckId } = useParams();

  useEffect(() => { //add an response for the abort controller
    async function fetchDecks() {
        const {signal} = new AbortController()
      const response = await readDeck(deckId, signal);
      setDeck(response);
    }
    fetchDecks();
  }, [deckId]);


    return (
      <div className="col">
        <Navbar deckId ={deckId} deck={deck} />
        <DisplayCard deck={deck} deckId={deckId} />
      </div>
    );
}

export default Study