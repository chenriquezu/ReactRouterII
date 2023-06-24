import React from "react";
import BuscarPokemones from "../components/buscarPokemones";

export default () => {
    return (
        <div className="container border border-0 mw-100 vh-100 d-flex justify-content-center">
            <div className="search d-flex flex-column w-50">
                <img src={process.env.PUBLIC_URL+'/logo.png'} alt="Pokedex" />
                <BuscarPokemones/>
            </div>
        </div>
    )
}