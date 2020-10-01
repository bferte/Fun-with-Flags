import React from 'react';
import Navigation from '../components/Navigation';
import AnswersList from '../components/AnswersList'


class Quizz extends React.Component {
  constructor() {
    super();
    this.state = {
        informations : [],
        pays : ''
      
    };
  }


    getCountriesInformations() {
      return new Promise((resolve, reject) => {
        window.fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(result => {
            console.log('Réponse API Countries Informations',
            this.setState({informations: result}),
            console.log(this.state.informations), 
            result)

            resolve(result)
        })
        .catch(error => {
            console.error(error)
            reject(error)
        })
      })
    }

    componentDidMount() {
        this.getCountriesInformations()
              
               
    }



  render() {
    return (
        <div>
           <Navigation />
           <AnswersList informations={this.state.informations}/>
           
            
        </div>
    )
  }

  
}

export default Quizz;
