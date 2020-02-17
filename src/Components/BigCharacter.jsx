
import React from "react";

import "./Styles.css";

const BigCharacter = props =>{
    
    return(
        <div sty className = "bigCharacter">
            
            <img className = "bigImage" src ={props.data.image}></img>
            <p>{props.data.name} </p>
            <p>Status: {props.data.status}</p>
            <p>Species:  {props.data.species}</p>
            <p>Location: {props.data.location.name}</p>
            <p>Gender:{props.data.gender}</p>
            <button className = "button" onClick= {()=>props.smallPPhandler()}>X</button>
        </div>   
    )
    
};

export { BigCharacter as default };