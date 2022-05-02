import React , {useState} from "react"

function ListCards({cards}){

    const [card, setCard]= useState([])

    //TODO: I want to be able to list the cards front and back
    

    return(
        <div>
        {cards && cards.length &&
            <h1>{cards[1].front}</h1>
        }  
        </div>
    )
}

export default ListCards