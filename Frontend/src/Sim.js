import React, { Component } from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import Button from 'react-bootstrap/Button';
import CanvasJSReact from './canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
export default class Sim extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      loaded: false,
      parties: [],
      politicos: [],
      laws: [],
      votes: {
        yes: 0,
        no: 0,
        abs: 0,
        num: 0,
      },
      votedPY: [],
      votedPN: [],
      votedPA: [],
      sLaw: null,
      mode: null,
      graph3: null,
    }
  }

  componentDidMount(){
    let temp = this.state
    fetch("http://localhost:8080/ISST-20-backend/rest/getAllLeyes")
      .then(response=>{
        return response.json();})
      .then(myjson=>{
        temp.laws = myjson
        temp.sLaw = myjson[0]
        //window.location.reload(false);
      })
    fetch("http://localhost:8080/ISST-20-backend/rest/getAllPartidos")
      .then(response=>{
        return response.json();})
      .then(myjson=>{
        temp.parties = myjson
      })
      fetch("http://localhost:8080/ISST-20-backend/rest/getAllPoliticos")
        .then(response=>{
          return response.json();})
        .then(myjson=>{
          temp.politicos = myjson
          temp.loaded = true
          this.setState(temp)
          //window.location.reload(false);
        })
  }

  showDiv() {
   document.getElementById('More').style.display = "block";
  }

  countPols(party){
    let temp = this.state.politicos
    let number = 0
    temp.forEach(p => {
      if (p.party === party){
        number++
      }
    });
    return number
  }

  voteParty(party, type){
    let temp = this.state.politicos
    temp.forEach(p => {
      if (p.party === party){
        if (type === "y"){
          this.votePol(p, "y")
        }
        else if (type === "n"){
          this.votePol(p, "n")
        }
        else if (type === "a"){
          this.votePol(p, "a")
        }
      }
    })
  }

  votePol(pol, type){
    let temp = this.state
    if (type === "y" && !temp.votedPY.includes(pol.name) && temp.votes.num < 350){
      temp.votes.yes += 1
      temp.votedPY.push(pol.name)
      if (temp.votedPN.includes(pol.name)){
        temp.votes.no -= 1
        const index = temp.votedPN.indexOf(pol.name);
        if (index > -1) {
          temp.votedPN.splice(index, 1);
        }
      }
      else if (temp.votedPA.includes(pol.name)){
        temp.votes.abs -= 1
        const index = temp.votedPA.indexOf(pol.name);
        if (index > -1) {
          temp.votedPA.splice(index, 1);
        }
      }
      temp.votes.num = temp.votes.yes + temp.votes.no + temp.votes.abs
    }

    else if (type === "n" && !temp.votedPN.includes(pol.name) && temp.votes.num < 350){
      temp.votes.no += 1
      temp.votedPN.push(pol.name)
      if (temp.votedPY.includes(pol.name)){
        temp.votes.yes -= 1
        const index = temp.votedPY.indexOf(pol.name);
        if (index > -1) {
          temp.votedPY.splice(index, 1);
        }
      }
      else if (temp.votedPA.includes(pol.name)){
        temp.votes.abs -= 1
        const index = temp.votedPA.indexOf(pol.name);
        if (index > -1) {
          temp.votedPA.splice(index, 1);
        }
      }
      temp.votes.num = temp.votes.yes + temp.votes.no + temp.votes.abs
    }
    else if (type === "a" && !temp.votedPA.includes(pol.name) && temp.votes.num < 350){
      temp.votes.abs += 1
      temp.votedPA.push(pol.name)
      if (temp.votedPN.includes(pol.name)){
        temp.votes.no -= 1
        const index = temp.votedPN.indexOf(pol.name);
        if (index > -1) {
          temp.votedPN.splice(index, 1);
        }
      }
      else if (temp.votedPY.includes(pol.name)){
        temp.votes.yes -= 1
        const index = temp.votedPY.indexOf(pol.name);
        if (index > -1) {
          temp.votedPY.splice(index, 1);
        }
      }
      temp.votes.num = temp.votes.yes + temp.votes.no + temp.votes.abs
    }
    this.setState(temp)
  }
  getPols(party){
    let list = []
    let temp = this.state.politicos
    temp.forEach(p => {
      if (p.party === party){
        list.push(p)
      }
    });
    const names = list.map((p, i) =>
          <div className ="MoreDivPol">
            <div className = "MoreDivPolName">{p.name}</div>
            <div className="MoreDivButtons">
              <button className="PartyButton" key={"SiPol " + i} onClick={() => this.votePol(p, "y", false)}>Si</button>
              <button className="PartyButton" key={"NoPol " + i} onClick={() => this.votePol(p, "n", false)}>No</button>
              <button className="PartyButton" key={"AbsPol " + i} onClick={() => this.votePol(p, "a", false)}>Abs</button>
            </div>
          </div>
    );
    return names
  }

  selLaw() {
    let temp = this.state
    let d = document.getElementById("select").value;
    d = JSON.parse(d)
    temp.sLaw = d
    temp.votes = {
      yes: 0,
      no: 0,
      abs: 0,
      num: 0,
    }
    temp.votedPY = []
    temp.votedPN = []
    temp.votedPA = []
    this.setState(temp)
  }
  showMore(party) {
    let x = document.getElementById(party + "_moreDiv");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
  render() {
    const parties = this.state.parties
    const votes = this.state.votes
    const laws = this.state.laws
    const buttonList = parties.map((p, i) =>
        <div className="DivPartido" key={i}>
          <p>{p.name} ({this.countPols(p.name)})</p>
          <div className="PartyBContainer">
            <button className="PartyButton" key={"Si " + i} onClick={() => this.voteParty(p.name, "y")}>Si</button>
            <button className="PartyButton" key={"No " + i} onClick={() => this.voteParty(p.name, "n")}>No</button>
            <button className="PartyButton" key={"Abs " + i} onClick={() => this.voteParty(p.name, "a")}>Abs</button>
          </div>
          <button onClick={() => this.showMore(p.name)}>Mas...</button>
          <div className="MoreDiv" id={p.name + "_moreDiv"}>
            {this.getPols(p.name)}
          </div>
        </div>
    );
    const graphlist =[
        "Votos","Sí/No",
    ]
    const options0 = {
      animationEnabled: false,
			exportEnabled: true,
       title: {
         text: this.state.sLaw !== null ? this.state.sLaw.name : "Loading"
       },
       data: [{
         type: "column",
         dataPoints: [
           { label: "Yes",  y: this.state.votes.yes},
           { label: "No", y: this.state.votes.no},
           { label: "Abstention", y: this.state.votes.abs},
         ]
       }]
    }
    const options1 = {
      animationEnabled: true,
			exportEnabled: true,
      title: {
        text: this.state.sLaw !== null ? this.state.sLaw.name : "Loading"
      },
      data: [{
          type: "pie",
          dataPoints: [
            { label: "Yes",  y: this.state.votes.yes},
            { label: "No", y: this.state.votes.no},
          ]
       }]
     }

    let graph;
    if(this.state.mode===0){
      graph=<div className="Graph">
        <CanvasJSChart options = {options0}/>
      </div>
    }
    else if(this.state.mode===1){
        graph=<div className="Graph">
          <CanvasJSChart options = {options1}/>
        </div>;
    }else{
      graph=<div className="SimWin">
        <img className="CongImg" src="/images/congreso.svg"></img>
      </div>;
    }
    const buttongraph = graphlist.map((p, i) =>
      <button style={{backgroundColor:"#ffffff"}} onClick={() => {
        this.setState({mode:i});
      } }  key={i}>{p}</button>
    );
    //console.log(laws)
    const lawselect = laws.map((p,i) =>
    <option value={JSON.stringify(p)} key={i}>{p.name}</option>
    );
    return(
      <>
      <div style={{width: "50%"}}>
      {buttongraph}
      {graph}
      </div>
      <div className="SimDisplay">
        <select className="LawSelect" id="select" onChange={() => this.selLaw()}>{lawselect}</select>
        <div className="LawDesc">{this.state.sLaw !== null ? this.state.sLaw.description : "Loading"}</div>
        <p className="VoteCounter"> {votes.num} votos (Quedan {350 - votes.num})</p>
        <div className="VoteNum">
          <p className="Yes"><b>Sí:</b> {votes.yes}</p>
          <p className="Abs"><b>Abstenciones:</b> {votes.abs}</p>
          <p className="No"><b>No:</b> {votes.no}</p>
        </div>
        <div className="Buttons">
          {this.state.loaded ? buttonList : <>Loading...</>}
        </div>
    </div>
      </>
    );
  }
}
