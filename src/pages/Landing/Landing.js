import React, {Component} from 'react';
import './Landing.css';
import { MDBJumbotron } from 'mdbreact';
import NavBar from '../../components/NavBar';

class Landing extends Component {
  render() {
    return (
      <div>
        <MDBJumbotron className="landing">
          <h1>Ministry of Code</h1>
          <h3>Check out these review quizzes!</h3>
          <NavBar />
        </MDBJumbotron>
      </div>
    );
  };
}

export default Landing;