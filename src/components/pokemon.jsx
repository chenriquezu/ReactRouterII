import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../MyContext";
import {Badge} from 'react-bootstrap';

//import '../components/pokemon.css'
const Pokemon = () => {
    const { url } = useContext(MyContext);
    const [pokemonSel, setPokemonSel] = useState({});
    const {pokemonesSelect} = useParams();

    const getDatosPokemon = async() =>{
        const response = await fetch(url+pokemonesSelect);
        const pokemonResponse = response.json().then(
            (data)=> {setPokemonSel(data); }
        );
    }

    useEffect(()=> {
        getDatosPokemon();
    },[pokemonesSelect]);

    return (
        <div className="container border border-0 mw-100 vh-100 d-flex justify-content-left">
            <div className="d-flex align-items-center ">
                <img src={pokemonSel?.sprites?.other['official-artwork'].front_default} alt="imagen pokemon Seleccionado"/>
                <div className="data d-flex flex-column text-success fw-5">
                    <h1>Ficha Técnica de Este Pokemon</h1>
                    <p>Nombre : {pokemonSel.name}</p>
                    <p>Peso:        {pokemonSel.weight}</p>
                    <p>Altura:      {pokemonSel.height}</p>
                    <p>Poderes:     {pokemonSel.abilities?.map(ability => (
                           <p key={pokemonSel.id}>{ability.ability.name}</p>
                        ))}</p>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;