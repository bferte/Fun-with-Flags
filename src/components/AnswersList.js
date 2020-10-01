import React from 'react';

class AnswersList extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

    getCountriesInformations() {
        return new Promise((resolve, reject) => {
            window.fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(result => {
                console.log('Réponse API Countries Informations', result)
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
        this.setState({
        someKey: 'otherValue'
        });
    }

  render() {
    return <p>{this.state.someKey}</p>;
  }

  
}

export default AnswersList;
