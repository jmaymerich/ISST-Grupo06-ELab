import React, { Component } from 'react';
import Quote from './Quote.js';
import Data from './Data.js';
import Sim from './Sim.js';
import Manage from './Manage.js';
import './App.css';
import logo from './images/logo.png';
import {members} from './Model.js';
import {parties} from './Model2.js';
import {laws} from './Model3.js';
import { HashRouter as Router, Switch, Route, Link}  from "react-router-dom";

class App extends React.Component {
  render(){
    const pols = members.members
    const parts = parties.parties
    const l = laws.laws
    //console.log(pols)
    return(
      <Router>
      <Switch>
        <Route exact path="/">
        <div className="App">
          <div className="Title">
            <div className="Centered">
              <img src={logo} id="Logo"></img>
              <Quote></Quote>
              <div className="Linkbar">
                <ul className="Linklist">
                  <Link to="/sim" className="Link"><li>Simulation</li></Link>
                  <Link to="/data" className="Link"><li>Database</li></Link>
                  <Link to="/manage" className="Link"><li>Manage</li></Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </Route>
        <Route path="/sim">
        <div className="AppSim">
          <Sim></Sim>
        </div>
        <div className="LinkbarSim">
          <ul className="LinklistSim">
            <Link to="/" className="Link"><li>Home</li></Link>
            <Link to="/data" className="Link"><li>Database</li></Link>
            <Link to="/manage" className="Link"><li>Manage</li></Link>
          </ul>
        </div>
        </Route>
        <Route path="/data">
        <div className="AppData">
          <Data pols={pols}></Data>
        </div>
        <div className="LinkbarData">
          <ul className="LinklistData">
            <Link to="/" className="Link"><li>Home</li></Link>
            <Link to="/sim" className="Link"><li>Simulation</li></Link>
            <Link to="/manage" className="Link"><li>Manage</li></Link>
          </ul>
        </div>
        </Route>
        <Route path="/manage">
        <div className="AppManage">
            <Manage pols={pols} parties={parts} laws={l}></Manage>
        </div>
        <div className="LinkbarData">
          <ul className="LinklistData">
            <Link to="/" className="Link"><li>Home</li></Link>
            <Link to="/sim" className="Link"><li>Simulation</li></Link>
            <Link to="/data" className="Link"><li>Database</li></Link>
          </ul>
        </div>
        </Route>
      </Switch>
      </Router>
    )
  }
}
export default App;
