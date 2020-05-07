import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Link}  from "react-router-dom";

export default class Manage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pols: [],
      parties: [],
      laws: [],
    }
  }

  onDelete(event, type){
    if (type === "politico"){
      let e = document.getElementById("namePol")
      let id = e.options[e.selectedIndex].value
      console.log(id)
      fetch("http://localhost:8080/ISST-20-backend/rest/deletePolitico?name=" + id, {method:"DELETE"})
        .then(res=>{res.text();})
        .then(res=>{window.location.reload(false);})
        .catch(err=>{console.log("Error")})
    }
    else if(type === "partido"){
      let e = document.getElementById("namePar")
      let id = e.options[e.selectedIndex].value
        fetch("http://localhost:8080/ISST-20-backend/rest/deletePartido?party=" + id, {method:"DELETE"})
          .then(res=>{res.text();})
          .then(res=>{window.location.reload(false);})
          .catch(err=>{console.log("Error")})
      }
    else if(type === "ley"){
      let e = document.getElementById("nameLey")
      let id = e.options[e.selectedIndex].value
        fetch("http://localhost:8080/ISST-20-backend/rest/deleteLey?name=" + id, {method:"DELETE"})
          .then(res=>{res.text();})
          .then(res=>{window.location.reload(false);})
          .catch(err=>{console.log("Error")})
      }
  }

  getBase64(file) {
        let doc = "";
        return new Promise((resolve,reject) =>{
          let reader = new FileReader();
          reader.onloadend = function () {
              resolve(reader.result)
          };
          reader.onerror = function (error) {
              console.log('Error: ', error);
          };
          reader.readAsDataURL(file);
        })

    }

  onPost(event, type){
    if (type === "politico"){
      var file = document.getElementById("polImg").files[0]
      let file64 = ""
      let data = {
        name: event.target[0].value,
        party: event.target[1].value,
        photo: file64,
        region: event.target[2].value
      }
      this.getBase64(file)
      .then((res)=>{
        data.photo = res.split(',')[1];
        console.log(JSON.stringify(data))
        return data
      })
      .then(data=>{
        fetch("http://localhost:8080/ISST-20-backend/rest/createPolitico", {method:"POST", body: JSON.stringify(data)})
            .then(res=>{window.location.reload(false);})
            //.then(res=>{window.location.reload(false);})
            .catch(err=>{console.log("Error")})}
      )
    }
    else if (type === "partido") {
      var file = document.getElementById("parImg").files[0]
      let file64 = ""
      let data = {
        party: event.target[0].value,
        logo: file64,
      }
      this.getBase64(file)
      .then((res)=>{
        data.logo = res.split(',')[1];
        console.log(JSON.stringify(data))
        return data
      })
      .then(data=>{
        fetch("http://localhost:8080/ISST-20-backend/rest/createPartido", {method:"POST", body: JSON.stringify(data)})
            .then(res=>{window.location.reload(false);})
            //.then(res=>{window.location.reload(false);})
            .catch(err=>{console.log("Error")})}
      )
    }
    else if (type === "ley") {
      let data = {
        name: event.target[0].value,
        description: event.target[1].value,
      }
      fetch("http://localhost:8080/ISST-20-backend/rest/createLey", {method:"POST", body: JSON.stringify(data)})
          .then(res=>{window.location.reload(false);})
          //.then(res=>{window.location.reload(false);})
          .catch(err=>{console.log("Error")})
    }
  }

  componentDidMount(){
    let temp = this.state
    fetch("http://localhost:8080/ISST-20-backend/rest/getAllPoliticos")
      .then(response=>{
        return response.json();})
      .then(myjson=>{
        temp.pols = myjson
        this.setState(temp)
      })
      .catch(err=>{console.log("Error")})

    fetch("http://localhost:8080/ISST-20-backend/rest/getAllPartidos")
      .then(response=>{
        return response.json();})
      .then(myjson=>{
        temp.parties = myjson
        this.setState(temp)
      })
      .catch(err=>{console.log("Error")})
    fetch("http://localhost:8080/ISST-20-backend/rest/getAllLeyes")
      .then(response=>{
        return response.json();})
      .then(myjson=>{
        temp.laws = myjson
        this.setState(temp)
      })
      .catch(err=>{console.log("Error")})

  }
  render() {
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
          <form className="CreateForm" id="polform" onSubmit={(e)=>this.onPost(e,"politico")}>
            <label className="Label">Name</label><br/>
            <input className="TextInput" type="text" placeholder="Politician's name..." required></input><br/>
            <label className="Label" >Party</label><br/>
            <select required>
              <option value="">Select a party...</option>
              {listParties}
            </select><br/>
            <label className="Label">Region</label><br/>
            <input className="TextInput" type="text" placeholder="Politician's region..." required></input><br/>
            <label className="Label">Photo</label><br/>
            <input type="file" id="polImg" accept="image/*" required></input><br/>
            <button>Submit</button>
          </form>
          </Route>
          <Route path="/manage/create_party">
          <h2>Create your party</h2>
          <form className="CreateForm" id="parform" onSubmit={(e)=>this.onPost(e,"partido")}>
            <label className="Label">Name</label><br/>
            <input className="TextInput" type="text" placeholder="Name of the party..." required></input><br/>
            <label className="Label">Logo</label><br/>
            <input type="file" id="parImg" accept="image/*" required></input><br/>
            <button>Submit</button>
          </form>
          </Route>
          <Route path="/manage/create_law">
          <h2>Create your law</h2>
          <form className="CreateForm" onSubmit={(e)=>this.onPost(e,"ley")}>
            <label className="Label">Name</label><br/>
            <input className="TextInput" type="text" placeholder="Name of the law..." required></input><br/>
            <label className="Label">Description</label><br/>
            <textarea className="Law" size="30" maxLength="2350" required></textarea><br/>
            <input type="submit" value="Submit"></input>
          </form>
          </Route>
          <Route path="/manage/delete_politician">
          <h2>Delete politician</h2>
            <form className="CreateForm" onSubmit={()=>this.onDelete(this,"politico")}>
            <select className="SelectDel" id="namePol" required>
              <option value="">Select politician...</option>
              {listPols}
            </select>
            <button className="DelButton">Delete</button>
            </form>
          </Route>
          <Route path="/manage/delete_party">
          <h2>Delete party</h2>
          <form className="CreateForm" onSubmit={()=>this.onDelete(this,"partido")}>
          <select className="SelectDel" id="namePar" required>
            <option value="">Select a party...</option>
            {listParties}
          </select>
            <button className="DelButton">Delete</button>
          </form>
          </Route>
          <Route path="/manage/delete_law">
          <h2>Delete law</h2>
          <form className="CreateForm" onSubmit={()=>this.onDelete(this,"ley")}>
            <select className="SelectDel" id="nameLey" required>
              <option value="">Select a law...</option>
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
