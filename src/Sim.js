import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
export default class Sim extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      sies: 0,
      noes: 0,
      abs: 0,
      pp: null,
      psoe: null,
      vox: null,
      up: null,
      erc: null,
      cs: null,
      jxcat: null,
      pnv: null,
      bildu: null,
      maspais: null,
      cup: null,
      cc: null,
      na: null,
      bng: null,
      prc: null,
      teruel: null,
    };
  }

  componentDidMount(){}

  render() {

    if(this.state.abs<0){
      this.setState({abs:0})
    }
    const parties = [
      "PSOE","PP","VOX","UP","ERC",
      "Cs","JxCAT","PNV","EH Bildu",
      "MAS PAIS","CC","CUP",
      "NA+","BNG","PRC","TERUEL"
    ]
    const buttonList = parties.map((p, i) =>
      <span className="PartyButton" key={i}>{p}<p/>
      <Button variant="primary" size="sm" onClick={() => {
        switch (p){
          case "PSOE":
          if(this.state.psoe===0){
            this.state.sies=this.state.sies+120;
            this.state.abs=this.state.abs-120;
          }else if(this.state.psoe===-120){
            this.state.sies=this.state.sies+120;
            this.state.noes=this.state.noes-120;
          }else if(this.state.psoe===null){
            this.state.sies=this.state.sies+120;
          }
          this.setState({psoe:120});
          break;

          case "PP":
          if(this.state.pp===0){
            this.state.abs=this.state.abs-89;
            this.state.sies=this.state.sies+89;
          }else if(this.state.pp===-89){
            this.state.sies=this.state.sies+89;
            this.state.noes=this.state.noes-89;
          }else if(this.state.pp===null){
            this.state.sies=this.state.sies+89;
          }
          this.setState({pp:89});
          break;

          case "VOX":
          if(this.state.vox===0){
            this.state.abs=this.state.abs-52;
            this.state.sies=this.state.sies+52;
          }else if(this.state.vox===-52){
            this.state.sies=this.state.sies+52;
            this.state.noes=this.state.noes-52;
          }else if(this.state.vox===null){
            this.state.sies=this.state.sies+52;
          }
          this.setState({vox:52});
          break;

          case "UP":
          if(this.state.up===0){
            this.state.abs=this.state.abs-35;
            this.state.sies=this.state.sies+35;
          }else if(this.state.up===-35){
            this.state.sies=this.state.sies+35;
            this.state.noes=this.state.noes-35;
          }else if(this.state.up===null){
            this.state.sies=this.state.sies+35;
          }
          this.setState({up:35});
          break;

          case "ERC":
          if(this.state.erc===0){
            this.state.abs=this.state.abs-13;
            this.state.sies=this.state.sies+13;
          }else if(this.state.erc===-13){
            this.state.sies=this.state.sies+13;
            this.state.noes=this.state.noes-13;
          }else if(this.state.erc===null){
            this.state.sies=this.state.sies+13;
          }
          this.setState({erc:13});
          break;

          case "Cs":
          if(this.state.cs===0){
            this.state.abs=this.state.abs-10;
            this.state.sies=this.state.sies+10;
          }else if(this.state.cs===-10){
            this.state.sies=this.state.sies+10;
            this.state.noes=this.state.noes-10;
          }else if(this.state.cs===null){
            this.state.sies=this.state.sies+10;
          }
          this.setState({cs:10});
          break;

          case "JxCAT":
          if(this.state.jxcat===0){
            this.state.abs=this.state.abs-8;
            this.state.sies=this.state.sies+8;
          }else if(this.state.jxcat===-8){
            this.state.sies=this.state.sies+8;
            this.state.noes=this.state.noes-8;
          }else if(this.state.jxcat===null){
            this.state.sies=this.state.sies+8;
          }
          this.setState({jxcat:8});
          break;

          case "PNV":
          if(this.state.pnv===0){
            this.state.abs=this.state.abs-6;
            this.state.sies=this.state.sies+6;
          }else if(this.state.pnv===-6){
          this.state.sies=this.state.sies+6;
            this.state.noes=this.state.noes-6;
          }else if(this.state.pnv===null){
            this.state.sies=this.state.sies+6;
          }
          this.setState({pnv:6});
          break;

          case "EH Bildu":
          if(this.state.bildu===0){
            this.state.abs=this.state.abs-5;
            this.state.sies=this.state.sies+5;
          }else if(this.state.bildu===-5){
            this.this.state.sies=this.state.sies+5;
            this.state.noes=this.state.noes-5;
          }else if(this.state.bildu===null){
            this.state.sies=this.state.sies+5;
          }
          this.setState({bildu:5});
          break;

          case "MAS PAIS":
          if(this.state.maspais===0){
            this.state.abs=this.state.abs-3;
            this.state.sies=this.state.sies+3;
          }else if(this.state.maspais===-3){
            this.state.sies=this.state.sies+3;
            this.state.noes=this.state.noes-3;
          }else if(this.state.maspais===null){
            this.state.sies=this.state.sies+3;
          }
          this.setState({maspais:3});
          break;

          case "CUP":
          if(this.state.cup===0){
            this.state.abs=this.state.abs-2;
            this.state.sies=this.state.sies+2;
          }else if(this.state.cup===-2){
            this.state.sies=this.state.sies+2;
            this.state.noes=this.state.noes-2;
          }else if(this.state.cup===null){
            this.state.sies=this.state.sies+2;
          }
          this.setState({cup:2});
          break;

          case "CC":
          if(this.state.cc===0){
            this.state.abs=this.state.abs-2;
            this.state.sies=this.state.sies+2;
          }else if(this.state.cc===-2){
            this.state.sies=this.state.sies+2;
            this.state.noes=this.state.noes-2;
          }else if(this.state.cc===null){
            this.state.sies=this.state.sies+2;
          }
          this.setState({cc:2});
          break;

          case "NA+":
          if(this.state.na===0){
            this.state.abs=this.state.abs-2;
            this.state.sies=this.state.sies+2;
          }else if(this.state.na===-2){
            this.state.sies=this.state.sies+2;
            this.state.noes=this.state.noes-2;
          }else if(this.state.na===null){
            this.state.sies=this.state.sies+2;
          }
          this.setState({na:2});
          break;

          case "BNG":
          if(this.state.bng===0){
            this.state.abs=this.state.abs-1;
            this.state.sies=this.state.sies+1;
          }else if(this.state.bng===-1){
            this.state.sies=this.state.sies+1;
            this.state.noes=this.state.noes-1;
          }else if(this.state.bng===null){
            this.state.sies=this.state.sies+1;
          }
          this.setState({bng:1});
          break;

          case "PRC":
          if(this.state.prc===0){
            this.state.abs=this.state.abs-1;
            this.state.sies=this.state.sies+1;
          }else if(this.state.prc===-1){
            this.state.sies=this.state.sies+1;
            this.state.noes=this.state.noes-1;
          }else if(this.state.prc===null){
            this.state.sies=this.state.sies+1;
          }
          this.setState({prc:1});
          break;

          case "TERUEL":
          if(this.state.teruel===0){
            this.state.abs=this.state.abs-1;
            this.state.sies=this.state.sies+1;
          }else if(this.state.erc===-1){
            this.state.sies=this.state.sies+1;
            this.state.noes=this.state.noes-1;
          }else if(this.state.teruel===null){
            this.state.sies=this.state.sies+1;
          }
          this.setState({teruel:1});
          break;
        }
      } }  key={i}>SÍ</Button>
      <Button variant="primary" size="sm" onClick={() => {
        switch (p){
          case "PSOE":
          if(this.state.psoe===0){
            this.state.noes=this.state.noes+120;
            this.state.abs=this.state.abs-120;
          }else if(this.state.psoe===120){
            this.state.sies=this.state.sies-120;
            this.state.noes=this.state.noes+120;
          }else if(this.state.psoe===null){
            this.state.noes=this.state.noes+120;
          }
          this.setState({psoe:-120});
          break;

          case "PP":
          if(this.state.pp===0){
            this.state.noes=this.state.noes+89;
            this.state.abs=this.state.abs-89;
          }else if(this.state.pp===89){
            this.state.sies=this.state.sies-89;
            this.state.noes=this.state.noes+89;
          }else if(this.state.pp===null){
            this.state.noes=this.state.noes+89;
          }
          this.setState({pp:-89});
          break;

          case "VOX":
          if(this.state.vox===0){
            this.state.noes=this.state.noes+52;
            this.state.abs=this.state.abs-52;
          }else if(this.state.vox===52){
            this.state.sies=this.state.sies-52;
            this.state.noes=this.state.noes+52;
          }
          this.setState({vox:-52});
          break;

          case "UP":
          if(this.state.up===0){
            this.state.noes=this.state.noes+35;
            this.state.abs=this.state.abs-35;
          }else if(this.state.up===35){
            this.state.sies=this.state.sies-35;
            this.state.noes=this.state.noes+35;
          }
          this.setState({up:-35});
          break;

          case "ERC":
          if(this.state.erc===0){
            this.state.noes=this.state.noes+13;
            this.state.abs=this.state.abs-13;
          }else if(this.state.erc===13){
            this.state.sies=this.state.sies-13;
            this.state.noes=this.state.noes+13;
          }
          this.setState({erc:-13});
          break;

          case "Cs":
          if(this.state.cs===0){
            this.state.abs=this.state.abs-10;
            this.state.noes=this.state.noes+10;
          }else if(this.state.cs===10){
            this.state.sies=this.state.sies-10;
            this.state.noes=this.state.noes+10;
          }
          this.setState({cs:-10});
          break;

          case "JxCAT":
          if(this.state.jxcat===0){
            this.state.noes=this.state.noes+8;
            this.state.abs=this.state.abs-8;
          }else if(this.state.jxcat===8){
            this.state.sies=this.state.sies-8;
            this.state.noes=this.state.noes+8;
          }
          this.setState({jxcat:-8});
          break;

          case "PNV":
          if(this.state.pnv===0){
            this.state.noes=this.state.noes+6;
            this.state.abs=this.state.abs-6;
          }else if(this.state.pnv===6){
          this.state.sies=this.state.sies-6;
            this.state.noes=this.state.noes+6;
          }
          this.setState({pnv:-6});
          break;

          case "EH Bildu":
          if(this.state.bildu===0){
            this.state.noes=this.state.noes+5;
            this.state.abs=this.state.abs-5;
          }else if(this.state.bildu===5){
            this.state.sies=this.state.sies-5;
            this.state.noes=this.state.noes+5;
          }
          this.setState({bildu:-5});
          break;

          case "MAS PAIS":
          if(this.state.maspais===0){
            this.state.abs=this.state.abs-3;
            this.state.noes=this.state.noes+3;
          }else if(this.state.maspais===3){
            this.state.sies=this.state.sies-3;
            this.state.noes=this.state.noes+3;
          }
          this.setState({maspais:-3});
          break;

          case "CUP":
          if(this.state.cup===0){
            this.state.abs=this.state.abs-2;
            this.state.noes=this.state.noes+2;
          }else if(this.state.cup===2){
            this.state.sies=this.state.sies-2;
            this.state.noes=this.state.noes+2;
          }
          this.setState({cup:-2});
          break;

          case "CC":
          if(this.state.cc===0){
            this.state.abs=this.state.abs-2;
            this.state.noes=this.state.noes-2;
          }else if(this.state.cc===+2){
            this.state.sies=this.state.sies-2;
            this.state.noes=this.state.noes+2;
          }
          this.setState({cc:-2});
          break;

          case "NA+":
          if(this.state.na===0){
            this.state.abs=this.state.abs-2;
            this.state.noes=this.state.noes+2;
          }else if(this.state.na===+2){
            this.state.sies=this.state.sies-2;
            this.state.noes=this.state.noes+2;
          }
          this.setState({na:-2});
          break;

          case "BNG":
          if(this.state.bng===0){
            this.state.abs=this.state.abs-1;
            this.state.noes=this.state.noes+1;
          }else if(this.state.bng===1){
            this.state.sies=this.state.sies-1;
            this.state.noes=this.state.noes+1;
          }
          this.setState({bng:-1});
          break;

          case "PRC":
          if(this.state.prc===0){
            this.state.abs=this.state.abs-1;
            this.state.noes=this.state.noes+1;
          }else if(this.state.prc===1){
            this.state.sies=this.state.sies-1;
            this.state.noes=this.state.noes+1;
          }
          this.setState({prc:-1});
          break;

          case "TERUEL":
          if(this.state.teruel===0){
            this.state.abs=this.state.abs-1;
            this.state.noes=this.state.noes+1;
          }else if(this.state.erc===1){
            this.state.sies=this.state.sies-1;
            this.state.noes=this.state.noes+1;
          }
          this.setState({teruel:-1});
          break;
        }
      } }  key={i}>NO</Button><p/>
      <Button variant="secondary" size="sm" onClick={() => {
        switch (p){
          case "PSOE":
          if(this.state.psoe===120){
            this.state.sies=this.state.sies-120;
            this.state.abs=this.state.abs+120;
          }else if(this.state.psoe===-120){
            this.state.noes=this.state.noes-120;
            this.state.abs=this.state.abs+120;
          }else if(this.state.psoe===null){
            this.state.abs=this.state.abs+120;
          }
          this.setState({psoe:0});

          break;

          case "PP":
          if(this.state.pp===89){
            this.state.sies=this.state.sies-89;
            this.state.abs=this.state.abs+89;
          }else if(this.state.pp===-89){
            this.state.noes=this.state.noes-89;
            this.state.abs=this.state.abs+89;
          }else if(this.state.pp===null){
            this.state.abs=this.state.abs+89;
          }
          this.setState({pp:0});

          break;

          case "VOX":
          if(this.state.vox===52){
            this.state.sies=this.state.sies-52;
            this.state.abs=this.state.abs+52;
          }else if(this.state.vox===-52){
            this.state.noes=this.state.noes-52;
            this.state.abs=this.state.abs+52;
          }else if(this.state.vox===0){
            this.state.abs=this.state.abs+52;
          }
          this.setState({vox:0});

          break;

          case "UP":
          if(this.state.up===35){
            this.state.sies=this.state.sies-35;
            this.state.abs=this.state.abs+35;
          }else if(this.state.up===-35){
            this.state.noes=this.state.noes-35;
            this.state.abs=this.state.abs+35;
          }else if(this.state.up===0){
            this.state.abs=this.state.abs+35;
          }
          this.setState({up:0});

          break;

          case "ERC":
          if(this.state.erc===13){
            this.state.sies=this.state.sies-13;
            this.state.abs=this.state.abs+13;
          }else if(this.state.erc===-13){
            this.state.noes=this.state.noes-13;
            this.state.abs=this.state.abs+13;
          }else if(this.state.erc===0){
            this.state.abs=this.state.abs+13;
          }
          this.setState({erc:0});

          break;

          case "Cs":
          if(this.state.cs===10){
            this.state.sies=this.state.sies-10;
            this.state.abs=this.state.abs+10;
          }else if(this.state.cs===-10){
            this.state.noes=this.state.noes-10;
            this.state.abs=this.state.abs+10;
          }else if(this.state.cs===0){
            this.state.abs=this.state.abs+10;
          }
          this.setState({cs:0});

          break;

          case "JxCAT":
          if(this.state.jxcat===8){
            this.state.sies=this.state.sies-8;
            this.state.abs=this.state.abs+8;
          }else if(this.state.jxcat===-8){
            this.state.noes=this.state.noes-8;
            this.state.abs=this.state.abs+8;
          }else if(this.state.jxcat===0){
            this.state.abs=this.state.abs+8;
          }
          this.setState({jxcat:0});

          break;

          case "PNV":
          if(this.state.pnv===6){
            this.state.sies=this.state.sies-6;
            this.state.abs=this.state.abs+6;
          }else if(this.state.pnv===-6){
            this.state.noes=this.state.noes-6;
            this.state.abs=this.state.abs+6;
          }else if(this.state.pnv===0){
            this.state.abs=this.state.abs+6;
          }
          this.setState({pnv:0});

          break;

          case "EH Bildu":
          if(this.state.bildu===5){
            this.state.sies=this.state.sies-5;
            this.state.abs=this.state.abs+5;
          }else if(this.state.bildu===-5){
            this.state.noes=this.state.noes-5;
            this.state.abs=this.state.abs+5;
          }else if(this.state.bildu===0){
            this.state.abs=this.state.abs+5;
          }
          this.setState({bildu:0});

          break;

          case "MAS PAIS":
          if(this.state.maspais===3){
            this.state.sies=this.state.sies-3;
            this.state.abs=this.state.abs+3;
          }else if(this.state.maspais===-3){
            this.state.noes=this.state.noes-3;
            this.state.abs=this.state.abs+3;
          }else if(this.state.maspais===0){
            this.state.abs=this.state.abs+3;
          }
          this.setState({maspais:0});

          break;

          case "CUP":
          if(this.state.cup===2){
            this.state.sies=this.state.sies-2;
            this.state.abs=this.state.abs+2;
          }else if(this.state.cup===-2){
            this.state.noes=this.state.noes-2;
            this.state.abs=this.state.abs+2;
          }else if(this.state.cup===0){
            this.state.abs=this.state.abs+2;
          }
          this.setState({cup:0});

          break;

          case "CC":
          if(this.state.cc===2){
            this.state.sies=this.state.sies-2;
            this.state.abs=this.state.abs+2;
          }else if(this.state.cc===-2){
            this.state.noes=this.state.noes-2;
            this.state.abs=this.state.abs+2;
          }else if(this.state.cc===0){
            this.state.abs=this.state.abs+2;
          }
          this.setState({cc:0});

          break;

          case "NA+":
          if(this.state.na===2){
            this.state.sies=this.state.sies-2;
            this.state.abs=this.state.abs+2;
          }else if(this.state.na===-2){
            this.state.noes=this.state.noes-2;
            this.state.abs=this.state.abs+2;
          }else if(this.state.na===0){
            this.state.abs=this.state.abs+2;
          }
          this.setState({na:0});
          break;

          case "BNG":
          if(this.state.bng===1){
            this.state.sies=this.state.sies-1;
            this.state.abs=this.state.abs+1;
          }else if(this.state.bng===-1){
            this.state.noes=this.state.noes-1;
            this.state.abs=this.state.abs+1;
          }else if(this.state.bng===0){
            this.state.abs=this.state.abs+1;
          }
          this.setState({bng:0});

          break;

          case "PRC":
          if(this.state.prc===1){
            this.state.sies=this.state.sies-1;
            this.state.abs=this.state.abs+1;
          }else if(this.state.prc===-1){
            this.state.abs=this.state.abs+1;
            this.state.noes=this.state.noes-1;
          }else if(this.state.prc===0){
            this.state.abs=this.state.abs+1;
          }
          this.setState({prc:0});
          break;

          case "TERUEL":
          if(this.state.teruel===1){
            this.state.abs=this.state.abs+1;
            this.state.sies=this.state.sies-1;
          }else if(this.state.teruel===-1){
            this.state.noes=this.state.noes-1;
            this.state.abs=this.state.abs+1;
          }else if(this.state.teruel===0){
              this.state.abs=this.state.abs+1;
          }
          this.setState({teruel:0});
          break;
        }

      } } key={i}>ABSTENCIÓN</Button>
      </span>
    );


    console.log(buttonList)
    console.log(this.state)

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
          <p className="Yes"><b>Sí:</b> {this.state.sies}</p>
          <p className="Abs"><b>Abstenciones:</b> {this.state.abs}</p>
          <p className="No"><b>No:</b> {this.state.noes}</p>
        </div>
        <div className="Buttons">
        {buttonList}





        </div>
      </div>
      </>
    );
  }
}
