import React from "react";
import { NavLink } from 'react-router-dom';

import './components.css';

const NavBar = () =>{
    const setActiveClass = ({ isActive }) => ( isActive? "active" : "inactive");
    const setPokeballActive = ({ isPokeball }) => ( isPokeball? "pokeballActive" : "pokeballInactive" );
    return(
        <div className="d-flex gap-4 bg bg-secondary p-3 contenedor justify-content-end">
            <NavLink className={ setActiveClass } to='/'>
                <div className="d-flex gap-1">
                    <img src="/pokebola.png" alt="pokebola" className = "pokeballActive"/>
                    <span>Home</span>
                </div>
            </NavLink>
            <NavLink className={ setActiveClass } to='/pokemondetalle'>
                <div className="d-flex gap-1">
                    <img src={process.env.PUBLIC_URL+'/pokebola.png'} alt="pokebola" className = "pokeballActive"/>
                    <span>Pokemones</span>
                </div>
            </NavLink>
        </div>
    )
}

export default NavBar;