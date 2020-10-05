import React from 'react';

class Flag extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    let URL = "https://restcountries.eu/data/"+this.props.alpha3Code.toLowerCase()+".svg"

    return (
    <div className="flagContainer">
      <img src = {URL} alt="" className="flagRightAnswer"/>
    </div>
    )
    
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Flag;
