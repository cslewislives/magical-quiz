import React, {Component} from 'react';
import Quiz from 'react-quiz-component';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import NavBar from '../components/NavBar';

class QuizPage extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <h1>Ministry of Code</h1>
          <NavBar />
        </div>
        <MDBContainer>
          <MDBRow middle='true'>
            <MDBCol>
              <Quiz quiz={this.props.module} shuffle={true}/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default QuizPage;