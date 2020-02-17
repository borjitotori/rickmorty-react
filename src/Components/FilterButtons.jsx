
import React from "react";

import "./Styles.css";

const FilterButtons = props =>{

    return(
        <div>
            {/* <button className = {"button"} onClick = {() => props.buttonOnClickHandler(0)}>All</button>
            <button className = {"button"} onClick = {() => props.buttonOnClickHandler(1)}>Alive</button>
            <button className = {"button"} onClick = {() => props.buttonOnClickHandler(2)}>Dead</button>
             */}
            <select className = {"button"} id="dropdown" onChange = {() => props.buttonOnClickHandler(0)}>
                <option value="0">All</option>
                <option value="2">Dead</option>
                <option value="1">Alive</option>
            </select>
        </div>
    );
};

export { FilterButtons as default };