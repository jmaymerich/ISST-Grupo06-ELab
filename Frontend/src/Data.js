import React, { Component } from 'react';
import './App.css';
import Polit from './Polit.js';

export default class Data extends React.Component {
  constructor(props){
    super(props);
    this.state = {pols: [], pol: {}, sel: false, parties:[]};
  }
  componentDidMount(){
    let temp = this.state
    fetch("http://localhost:8080/ISST-20-backend/rest/getAllPartidos")
      .then(response=>{
        return response.json();})
      .then(myjson=>{
        temp.parties = myjson
        //console.log(temp)

      })
      .catch(err=>{console.log("Error")})
    fetch("http://localhost:8080/ISST-20-backend/rest/getAllPoliticos")
      .then(response=>{
        return response.json();})
      .then(myjson=>{
        temp.pols = myjson
        console.log(temp)
        this.setState(temp)
      })
      .catch(err=>{console.log("Error")})
  }
  resetBBDD(){
    fetch("http://localhost:8080/ISST-20-backend/rest/uploadBBDD")
      .then(response=>{
        return response.json();})
      .then(res => {window.location.reload(false)})
      .catch(err=>{console.log("Error")})
  }

  render() {
    const pols = this.state.pols; //this.props.pols
    const listPols = pols.map((p, i) =>
      <li className="Pol" onClick={() => {this.setState({pols: this.state.pols, pol:p, sel:true})}} key={i}>{i+1}.-{p.name}</li>
    );
    return(
      <>
      <button onClick={() => this.resetBBDD()}>Reset BBDD</button>
      <ul className="PolUl">
        {listPols}
      </ul>
      {this.state.sel ? <Polit pol={this.state.pol} parties={this.state.parties}></Polit>: null}
      </>
    );
  }
}
