import React from 'react';
import Answer from './Answer';
import Flag from './Flag';
import { getRandomInt } from '../service/Api'

class AnswersList extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue',
      rightInfos: []
    };
  }

  // rightAnswerInfos() {
  //   var infos = this.props.informations[getRandomInt(0,250)]
  //   console.log(this.props.informations[1])
  //   return infos


  // }
  
  // falseAnswerInfos() {

  // }

  // componentDidMount() {
  //   this.setState({rightInfos: this.rightAnswerInfos()})
  //   console.log(this.props)
  // }
    

  render() {

    const { rightAnswerInformations } = this.props
    

     
   
    return (
      <>
        <div className="flagContainer">
          {console.log(this.props)}
          <Flag />
        </div>
        <div className="answersListContainer">
          {
            rightAnswerInformations
            ? (
              console.log(this.state) 
            )
            : '44'
          }
          <Answer name={rightAnswerInformations}/>
          <Answer />
          <Answer />
          <Answer />
        </div>
    </>
    ) 
  }

  
}

export default AnswersList;
