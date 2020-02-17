
import React from "react";

import "./Styles.css";
import Character from "./Character"
import BigCharacter from "./BigCharacter"

const Characters = props =>{
    if(props.data.info.bigPicture === 0){
        return(
            
            <div className = "characters">


                {props.data.results.map(element => {
                    if(element.display === 1){
                    return(  <Character bigPictureHandler = {props.bigPictureHandler} key = {element.name} data = {element} ></Character>);
                    }
                })
                }
            </div>
        )
    }else{
        
        return(  <BigCharacter bigPictureHandler = {props.bigPictureHandler} 
                                smallPPhandler = {props.smallPPhandler}
                            
                                data = {props.data.results[props.data.info.bigPicture-1]} ></BigCharacter>);
    }

    
};

export { Characters as default };