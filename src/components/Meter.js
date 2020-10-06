import React from 'react';

class Meter extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
    <div className="meterContainer">
        <div>SCORE :&nbsp;</div>
        <div>{this.props.score}</div>
        
   
    </div>
    

    )
  }

  componentDidMount() {
    this.setState({
      
    });
  }
}

export default Meter;
