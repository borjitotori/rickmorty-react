
import React from "react";

import "./Styles.css";

const Character = props =>{
    return(
        <div sty className = "Character">
            <img onClick = {()=>props.bigPictureHandler(props.data.id)} className = "image" src ={props.data.image}></img>
            <p className="name">{props.data.name} </p>
            <p className="txt">Status: {props.data.status}</p>
            <p className="txt">Species:  {props.data.species}</p>
        </div>   
    )
    
};

export { Character as default };