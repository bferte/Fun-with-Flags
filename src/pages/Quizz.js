import React from 'react';
import Navigation from '../components/Navigation';
import AnswersList from '../components/AnswersList'
import { getRandomInt,getRightAnswerInfos } from '../service/Api'


class Quizz extends React.Component {
  constructor() {
    super();
    this.state = {
        rightInformations : [],
        falseInformations : [],
        pays : ''
      
    };
  }


    

    getfalseAnswerInfos() {
      return new Promise((resolve, reject) => {
        window.fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(result => {
            console.log('Réponse API Countries Informations',
            this.setState({falseInformations: result[getRandomInt(0,250)]}),
            console.log(this.state.falseInformations), 
            result)

            resolve(result)
        })
        .catch(error => {
            console.error(error)
            reject(error)
        })
      })
    }

    
test = () => {
  getRightAnswerInfos()
        .then(data => this.setState({rightInformations: data[getRandomInt(0,250)]}))
}


    componentDidMount() {
      this.update = setInterval(() => { 
        this.test()},1000)
        
       
               
    }



  render() {
    
    return (
        <div>
           <Navigation />
           <AnswersList rightAnswerinformations={this.state.rightInformations} falseAnswerinformations={this.state.falseInformations}/>
           
            
        </div>
    )
  }

  
}

export default Quizz;
