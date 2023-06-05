import React, { useEffect, useState } from 'react'
import './App.css';
import PokeCard from './PokeCard';


function PokemonsList() {

  const [loading, setLoading]= useState(true)  
  const [list, setList] = useState([])
  const [pokemon, setPokemon]= useState();
    //normal function syntax
  
    // Function arrow syntax
    const getPokemons = async() => {
        const myData = await fetch ('https://pokeapi.co/api/v2/pokemon/')
        console.log(myData)
        const jsonData = await myData.json()
        console.log(jsonData.results);
         setList(jsonData.results);
        setLoading(false)

        console.log(list)      

    }

    useEffect(() =>{getPokemons()  }, [])

    const choosePokemon = (pokename) => {
      //alert(pokename)
      setPokemon(pokename)
    }

  return (
    <div className='pokemonsList'>
      <h1>Pokemon List: </h1>

   {loading?<p>Data loading...</p> : ( <>
      {list.map((p)=>(
        <div key={p.name} >
      <p onClick={()=>{choosePokemon(p.name)}}>{p.name}</p>
          </div>
      ))}
      </>) 
      }
<PokeCard pokemonToShow={pokemon}/>
    </div>
  )

}

export default PokemonsList


/**{loading ? (<p>Loading data</p> ): (
      <>
      {list.map((p)=>{
        <div key={p.name} >
          <p>{p.name}</p>
          </div>
      })}
      </>
    )
} */