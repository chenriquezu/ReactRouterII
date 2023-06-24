import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Pokemones from "./views/pokemones";

import Navbar from "./components/navBar";
import MyContext  from "./MyContext";

import Pokemon from './components/pokemon';
function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon/';

  const [pokemones,setPokemones] = useState([]);
  const [pokemonesSelect, setPokemonesSelect] = useState("");

  const globalState = { pokemones , pokemonesSelect , setPokemonesSelect , url }

  const getData = async() =>{
     const resp = await fetch(url);
     const pokemon  = await resp.json();
     const pokemonResult = pokemon.results;
     setPokemones(pk => [...pokemonResult]);
  }

  useEffect(() => {getData()
  },[]);

  return (
    <div className="App">
      <MyContext.Provider value={globalState}>    
        <BrowserRouter>
          <Navbar/>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path='/pokemondetalle' element={<Pokemones />} />
             <Route  path="/pokemondetalle/:pokemonesSelect" element={ pokemonesSelect !== ""? <Pokemon /> : <Navigate to="/pokemondetalle" />}/>
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}


export default App;
