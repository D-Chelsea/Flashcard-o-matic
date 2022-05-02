import React, {useState, useEffect} from "react";

import {readDeck} from "../../utils/api/index"

function ListDecks(){
    const [decks, setDecks]= useState([])

    useEffect(() => { //add an response for the abort controller
        async function fetchDecks() {
            const {signal} = new AbortController()
            const response = await readDeck(decks, signal);
          setDecks(response);
        }
        fetchDecks();
      }, []);
      console.log(decks.id)

    return (
        <h1>hi</h1>
    )
}

export default ListDecks