import React from 'react';
import Flag from './Flag';
import Meter from './Meter'
import RoundMeter from './RoundMeter'

import { getRandomInt,getRightAnswerInfos,displayIncorrect,displayCorrect } from '../service/Api'

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Button';

class AnswersList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      infos: [],
      answers: [1,2,3,4],
      score: 0,
      round: 1,
      answered: false,
      
     
    };
    this.handleWrongResponse = this.handleWrongResponse.bind(this)
    this.handleRightResponse = this.handleRightResponse.bind(this)
  }

  


  


  removeIncorrect() {
    return new Promise(resolve => {
      setTimeout(() => {
        document.getElementById('incorrect').style.display="none";
        document.getElementById('flag').style.display='block';
        resolve('resolved');
      }, 2000);
    });
  }
  removeCorrect() {
    return new Promise(resolve => {
      setTimeout(() => {
        document.getElementById('correct').style.display="none";
        document.getElementById('flag').style.display='block';
        resolve('resolved');
      }, 2000);
    });
  }


  async addRound() {
    await this.removeIncorrect();
    this.setState({round: this.state.round + 1 })
    this.setState({answered: false})
  }

  async addScore() {
    await this.removeCorrect();
    this.setState({score: this.state.score + 1 })
    this.setState({answered: false})
  }



//////////////
  handleWrongResponse(event) { 
    let x = event.currentTarget
    console.log(x)
    x.classList.add("wrongResponseBtn")
    displayIncorrect()

    
    setTimeout(function(){x.classList.remove("wrongResponseBtn")},1500)
  
    this.removeIncorrect();
    this.addRound();


  }

  handleRightResponse(event) {
    this.setState({answered: true})
    let x = event.currentTarget
    console.log(x)
    x.classList.add("rightResponseBtn")
    displayCorrect()

    
    setTimeout(function(){x.classList.remove("rightResponseBtn")},1500)
  
    this.removeCorrect();
    this.addRound();
    this.addScore();
    
  }


  componentDidMount() {
    getRightAnswerInfos()
    .then (data => this.setState({infos: data,
      isLoaded: true
    }))  
  }






  render() {

    this.setState.answers = this.state.answers.sort(() => Math.random() - 0.5)
    const { answers } = this.state

    let rightNumber = getRandomInt(0,250)

    //// A Résoudre //// !!!!!!!!!!  (les numero dess mauvaises reponses peuvent etre le meme que la bonne reponse)
    let wrongNumber = [getRandomInt(0,250),getRandomInt(0,250),getRandomInt(0,250)]

    // if (wrongNumber[0] === (rightNumber || wrongNumber[1] || wrongNumber[2] ) {
      
    // }
    

    
    

    if(this.state.isLoaded === true) {
      console.log(this.state)
        return (
        <>
          <Meter score={this.state.score}/>
          <RoundMeter round={this.state.round}/>
          <div className="flagContainer">
            {console.log(this.props)}
            <Flag alpha3Code={this.state.infos[rightNumber].alpha3Code}/>
            <div id='incorrect'><span>INCORRECT</span></div>
            <div id='correct'><span>CORRECT</span></div>
          </div>
          
          <div className="answersListContainer">
            {
          answers.map((value,index) => {
            if(value == 1) {
             return  <Button key={index} id={"rightBtn"} variant="contained" color="primary" onClick={this.handleRightResponse}>{this.state.infos[rightNumber].name+' >GG<'}</Button>

            }
            else {
              return  <Button key={index} id={"wrgBtn"+index} onClick={this.handleWrongResponse}  variant="contained" color="primary" >{this.state.infos[wrongNumber.shift()].name}</Button>
                          
            }
            
            
             
            
          })
            }
            <Modal />
          </div>
          

          
      </>
      ) 
    }  else {
      return (
        <p>Chargement...</p>
      )
    }
   
   
  }

  
}

export default AnswersList;
