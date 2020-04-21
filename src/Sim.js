import React, { Component } from 'react';
import './App.css';
export default class Sim extends React.Component {
  componentDidMount(){}
  render() {
    const parties = [
      "PSOE","PP","VOX","UP","ERC",
      "Cs","JxCAT","PNV","EH Bildu",
      "MAS PAIS","CUP","PNC","NA+",
      "BNG","PRC","TERUEL"
    ]
    const buttonList = parties.map((p, i) =>
      <button className="PartyButton" key={i}>{p}</button>
    );
    console.log(buttonList)
    return(
      <>
      <div className="SimWin">
        <img className="CongImg" src="/images/congreso.svg"></img>
      </div>
      <div className="SimDisplay">
        <div className="BarNo">
          <div className="BarYes">
          </div>
        </div>
        <div className="VoteNum">
          <p className="Yes"><b>Sí:</b> X num</p>
          <p className="Abs"><b>Abstenciones:</b> X num</p>
          <p className="No"><b>No:</b> X num</p>
        </div>
        <div className="Buttons">
          {buttonList}
        </div>
      </div>
      </>
    );
  }
}
