import React, { Component } from 'react';
import './App.css';
export default class Quote extends React.Component {
  componentDidMount(){
    var quotes = [
      "Por las carreteras tienen que ir coches y de los aeropuertos tienen que salir aviones.",
      "Estoy muy a gusto y muy tranquilo porque tenemos un Rey bastante republicano.",
      "Pido disculpas por no romper la cara a los fachas con los que discuto en la televisión.",
      "Al himno de España de Marta Sánchez le pongo un 10.",
    ];
    var pols = [
      "-M.Rajoy",
      "-J.L.R.Zapatero",
      "-P.Iglesias",
      "-S.Abascal",
    ]
    var elem = document.getElementById("main_Quote");
    var el2 = document.getElementById("author");
    elem.innerHTML = quotes[0];
    el2.innerHTML = pols[0];
    var counter = 0;
    var inst = setInterval(() => {
      elem.innerHTML = quotes[counter];
      el2.innerHTML = pols[counter];
      counter++;
      if (counter >= quotes.length) {counter = 0;}
    },10000)

  }
  render() {
    return(
      <div>
        <p id="main_Quote"></p>
        <p id="author"></p>
      </div>
    );
  }
}
