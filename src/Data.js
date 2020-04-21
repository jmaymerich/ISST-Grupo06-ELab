import React, { Component } from 'react';
import './App.css';
import Polit from './Polit.js';

export default class Data extends React.Component {
  constructor(props){
    super(props);
    this.state = {pol: {}, sel: false};
  }
  componentDidMount(){}
  render() {
    const pols = this.props.pols;
    const listPols = pols.map((p, i) =>
      <li className="Pol" onClick={() => {this.setState({pol:p, sel:true})}} key={i}>{p.name}</li>
    );
    return(
      <>
      <ul className="PolUl">
        {listPols}
      </ul>
      {this.state.sel ? <Polit pol={this.state.pol}></Polit>: null}
      </>
    );
  }
}
