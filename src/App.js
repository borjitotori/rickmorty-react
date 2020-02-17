import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cloneDeep from "clone-deep";
import Header from "./Components/Header"
import Characters from "./Components/Characters"
import Data from "./assets/data";

class App extends Component {
  state = {
    data: { ...Data }
  }

  buttonOnClickHandler = aliveType =>{
    aliveType = parseInt( document.getElementById("dropdown").value);
    const data = cloneDeep(this.state.data);
    //if alive type 0 all 1 alive 2 dead
    data.results.forEach(element => {
      if(aliveType === 0){
        element.display = 1;  
      
      }else if(aliveType === 1){
        if(element.status === "Alive"){
          element.display = 1;  
        }else{
          element.display = 0;  
        }

      }else if(aliveType === 2){
        if(element.status === "Dead"){
          element.display = 1;  
        }else{
          element.display = 0;  
        }
      }
    });


    this.setState({data});  
  }

  textBarHandler = text =>{
    const data = cloneDeep(this.state.data);

    //filter display by text
    data.results.forEach(element => {
      if(element.name.toLowerCase().includes(text.toLowerCase())){
        element.display = 1;
      }else{
        element.display = 0;
      }
    });

    this.setState({data});  
  }

  bigPictureHandler = character =>{
    const data = cloneDeep(this.state.data);
    data.info.bigPicture = character;
    this.setState({data});  
  }
  //samll picture portview Handler
  smallPPhandler= lul =>{
    const data = cloneDeep(this.state.data);
    data.info.bigPicture = 0;
    this.setState({data});  
  }

  render() {
    return (
      <div className="App">
        <h1>Rick And Morty <br/> Characters </h1>
        <div className="content">
          <Header buttonOnClickHandler ={this.buttonOnClickHandler} textBarHandler={this.textBarHandler} data={this.state.data} smallPPhandler ={this.smallPPhandler}/>
          <Characters bigPictureHandler = {this.bigPictureHandler} smallPPhandler ={this.smallPPhandler}  className="Characters" data = {this.state.data}/>
        </div>
        <div className="bottom">
          <div className="bedrock"/>
        </div>
      </div>
    );
  }
}

export default App;
