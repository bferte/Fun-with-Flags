import React from 'react';

class RoundMeter extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
    <div className="meterContainer">
      
        <div>ROUND :&nbsp;</div>
        <div>{this.props.round}</div>

   
    </div>
    

    )
  }

  componentDidMount() {
    this.setState({
      
    });
  }
}

export default RoundMeter;

