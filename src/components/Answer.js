import React from 'react';
import Button from '@material-ui/core/Button';

class Answer extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
      <Button variant="contained" color="primary">
      Hello World
      </Button>
    
      )
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Answer;
