
import React from "react";

import "./Styles.css";
import FilterButtons from "./FilterButtons"
import BigCharacter from "./BigCharacter"

const Header = props =>{
    return(
        <div className="header">
            <FilterButtons buttonOnClickHandler ={props.buttonOnClickHandler}/>
            <input onChange = {(event) => props.textBarHandler(event.target.value)}/>

        </div>
    );
    
};

export { Header as default };