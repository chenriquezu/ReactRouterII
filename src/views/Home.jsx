/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import "./home.css"
export default () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    return(
        <div className="container border border-0 mw-100 vh-100">
            <div className="portada d-flex align-items-center pt-4 ps-1 ms-1">
                <img src={process.env.PUBLIC_URL+'/pikachu.png'} alt="Pikachu Saltando" className="pokemon" />
               
            </div>
        </div>
    )
}