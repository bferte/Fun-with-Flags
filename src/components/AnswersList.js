import React from 'react';
import Answer from './Answer';

class AnswersList extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

    

    

  render() {
    return (
    <div className="answersListContainer">
      <Answer />
      <Answer />
      <Answer />
      <Answer />
    </div>
    )
  }

  
}

export default AnswersList;
