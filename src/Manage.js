import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Link}  from "react-router-dom";

export default class Manage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pols: props.pols,
      parties: props.parties,
      laws: props.laws,
    }
  }
  componentDidMount(){}
  render() {
    console.log(this.props)
    const listPols = this.state.pols.map((p, i) =>
      <option value={p.name}>{p.name}</option>
    );
    const listParties = this.state.parties.map((f, i) =>
      <option value={f.name}>{f.name}</option>
    );
    const listLaws = this.state.laws.map((g, i) =>
      <option value={g.name}>{g.name}</option>
    );
    return(
      <>
      <div className="ManageLinkDiv">
        <Link className="ManageLink" to="/manage/create_politician"><li>Create politician</li></Link>
        <Link className="ManageLink" to="/manage/create_party"><li>Create party</li></Link>
        <Link className="ManageLink" to="/manage/create_law"><li>Create law</li></Link>
      </div>
      <div className="ManageLinkDiv">
        <Link className="ManageLink" to="/manage/delete_politician"><li>Delete politician</li></Link>
        <Link className="ManageLink" to="/manage/delete_party"><li>Delete party</li></Link>
        <Link className="ManageLink" to="/manage/delete_law"><li>Delete law</li></Link>
      </div>
      <Router>
        <Switch>
          <Route path="/manage/create_politician">
          <h2>Create your politician</h2>
          <form className="CreateForm">
            <label className="Label">Name</label><br/>
            <input className="TextInput" type="text" placeholder="Politician's name..."></input><br/>
            <label className="Label">Party</label><br/>
            <select>
              {listParties}
            </select><br/>
            <label className="Label">Photo</label><br/>
            <input type="file" accept="image/*"></input><br/>
            <input type="submit"></input>
          </form>
          </Route>
          <Route path="/manage/create_party">
          <h2>Create your party</h2>
          <form className="CreateForm">
            <label className="Label">Name</label><br/>
            <input className="TextInput" type="text" placeholder="Name of the party..."></input><br/>
            <label className="Label">Logo</label><br/>
            <input type="file" accept="image/*"></input><br/>
            <input type="submit"></input>
          </form>
          </Route>
          <Route path="/manage/create_law">
          <h2>Create your law</h2>
          <form className="CreateForm">
            <label className="Label">Name</label><br/>
            <input className="TextInput" type="text" placeholder="Name of the law..."></input><br/>
            <label className="Label">Description</label><br/>
            <textarea className="Law" size="30" maxLength="2350"></textarea><br/>
            <input type="submit" value="Submit"></input>
          </form>
          </Route>
          <Route path="/manage/delete_politician">
          <h2>Delete politician</h2>
            <form className="CreateForm">
            <select className="SelectDel">
              {listPols}
            </select>
            <button className="DelButton">Delete</button>
            </form>
          </Route>
          <Route path="/manage/delete_party">
          <h2>Delete party</h2>
          <form className="CreateForm">
          <select className="SelectDel">
            {listParties}
          </select>
            <button className="DelButton">Delete</button>
          </form>
          </Route>
          <Route path="/manage/delete_law">
          <h2>Delete law</h2>
          <form className="CreateForm">
            <select className="SelectDel">
              {listLaws}
            </select>
            <button className="DelButton">Delete</button>
          </form>
          </Route>
        </Switch>
      </Router>
      </>
    );
  }
}
