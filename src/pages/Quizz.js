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

    componentDidMount() {
                        
    }



  render() {
    
    return (
        <div>
           <Navigation />
           <AnswersList />
           
            
        </div>
    )
  }

  
}

export default Quizz;
