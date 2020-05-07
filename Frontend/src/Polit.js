import React, { Component } from 'react';
import './App.css';

export default class Polit extends React.Component {
  constructor(props){
    super(props);
    this.state = {image: "data:image/jpg;base64," + props.pol.photo, logo: ""};
  }
  componentDidMount(){
    let temp = this.state
    let str = null
    for(let p of this.props.parties) {
      if (p.name === this.props.pol.party) {
        str = p.logo
        break
      }
    }
    temp.logo = "data:image/png;base64," + str
    this.setState(temp)

  }
  componentDidUpdate(prevProps){
    if (this.props.pol.photo !== prevProps.pol.photo) {
      let str = null
      for(let p of this.props.parties) {
        if (p.name === this.props.pol.party) {
          str = p.logo
          console.log(str)
          break
        }
      }
      let string = "data:image/png;base64," + str
      this.setState({image: "data:image/jpg;base64," + this.props.pol.photo, logo: string});
    }
  }
  render() {
    let politician = this.props.pol;
    let logo =  this.state.logo;
    let photo =  this.state.image;
    let logourl = '/images/pols/' + logo;
    let photourl = '/images/pols/' + photo;
    return(
      <div className="PolDiv">
      <img src={photo} className="PolPic"></img>
      <p>Name: {politician.name}</p>
      <p>Party: {politician.party}</p>
      <p>Region: {politician.region}</p>
      <p>Logo:</p>
      <img className="LogoPic" src={logo}></img>
      </div>
    );
  }
}
