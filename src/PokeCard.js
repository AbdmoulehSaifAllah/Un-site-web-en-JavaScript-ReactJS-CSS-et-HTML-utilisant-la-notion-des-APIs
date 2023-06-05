import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';


function PokeCard({pokemonToShow}) {

    const [cardData, setCardData]= useState(null)  

    const getCardData = async (name)=> {
        if(name){
            await axios
            .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) =>{
                setCardData(response);
                console.log(response);
            })
        }
        else{
            console.log("no Data")
        }
    }
    useEffect(()=> {getCardData(pokemonToShow)}, [pokemonToShow])

  return (
    <div className="pokeCard"> <p>poke  {pokemonToShow} </p>  
        {cardData ? (            
        <div>
                <h3>{cardData.data.name}</h3>
                <p>{cardData.data.height}</p>
                <p>{cardData.data.weight}</p>
                

            </div>) : (<h3></h3>
)}

    </div>
  )
}

export default PokeCard