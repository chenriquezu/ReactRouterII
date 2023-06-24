import React from "react";
import MyContext from '../MyContext';
import Form from 'react-bootstrap/Form'
import { useContext, useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";


const BuscarPokemones = () => {
   const { pokemones , pokemonesSelect , setPokemonesSelect } = useContext(MyContext);
   const [pokemonSorted, SetPokemonSorted] = useState([]);
   
   const navigate = useNavigate();

   const sortPokemons = () => {
       const pokemonsSorted = pokemones.sort((a,b) => {
             let pokemon1 = a.name.toUpperCase();
             let pokemon2 = b.name.toUpperCase();
             if (pokemon1 < pokemon2){ return -1};
             if (pokemon1 > pokemon2){ return 1};
             if (pokemon1 === pokemon2){ return 0}
          });
          SetPokemonSorted(pokemonsSorted);
   }

   useEffect(() => {
      sortPokemons();
   },[]);

   const catchPokemon = (e) =>{
    setPokemonesSelect(e.target.value);
    navigate(`/pokemondetalle/${e.target.value}`);
}

    return (
        <div>
            <Form.Select aria-label="Selecciona tu pokemón" onChange={catchPokemon} value={pokemonesSelect}>
                <option value='Selecciona tu pokemón' disabled={true}>Selecciona tu pokemón</option>
                    {pokemonSorted?.sort().map(pokemon => (
                        <option key ={pokemon.name} value={pokemon.name} >{pokemon.name}</option>
                     
                    ))}
            </Form.Select>
        </div>
    )
}

export default BuscarPokemones;