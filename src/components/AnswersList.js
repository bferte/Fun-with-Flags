import React from 'react';
import Answer from './Answer';
import Flag from './Flag';
import { getRandomInt,getRightAnswerInfos } from '../service/Api'

class AnswersList extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      infos: [],
      rightInfos: [],
      falseInfos: [],
      answers: [1,2,3,4],
     
    };
  }

  


  componentDidMount() {
    getRightAnswerInfos()
    .then (data => this.setState({infos: data,
      isLoaded: true
    }))

    
   
   
  
    

    
    


    // .then(this.setState.rightInfos = this.state.infos[getRandomInt(0,250)])
    // .then(console.log(this.state.rightInfos))
    
    
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
          <div className="flagContainer">
            {console.log(this.props)}
            <Flag alpha3Code={this.state.infos[rightNumber].alpha3Code}/>
          </div>
          
          <div className="answersListContainer">
            {
          answers.map((value,index) => {
            if(value == 1) {
             return  <Answer key={index} name={this.state.infos[rightNumber].name} />

            }
            else {
              return <Answer key={index} name={this.state.infos[wrongNumber.shift()].name}/>
            }
            
            
             
            
          })
            }
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
