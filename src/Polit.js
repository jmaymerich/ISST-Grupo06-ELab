import React, { Component } from 'react';
import './App.css';

export default class Polit extends React.Component {
  componentDidMount(){}
  render() {
    let politician = this.props.pol;
    let logo =  this.props.pol.logo;
    let photo =  this.props.pol.photo;
    let logourl = '/images/pols/' + logo;
    let photourl = '/images/pols/' + photo;
    console.log(photourl,"a");
    return(
      <div className="PolDiv">
      <img src={photourl} className="PolPic"></img>
      <p>Name: {politician.name}</p>
      <p>Party: {politician.party}</p>
      <p>Region: {politician.region}</p>
      <p>Logo:</p>
      <img className="LogoPic" src={logourl}></img>
      </div>
    );
  }
}
