import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { MDBBtn } from 'mdbreact';

class NavBar extends Component {
  render() {
    return (
      <nav className='nav-bar'>
        { window.location.pathname !== '/' ? (<Link to="/"><MDBBtn color='elegant'>Home</MDBBtn></Link>) : false }
        <Link to="/quiz/module1"><MDBBtn color='elegant'>Module 1 Quiz</MDBBtn></Link>
        <Link to="/quiz/module2"><MDBBtn color='elegant'>Module 2 Quiz</MDBBtn></Link>
        <Link to="/quiz/module3"><MDBBtn color='elegant'>Module 3 Quiz</MDBBtn></Link>
        { window.location.pathname !== '/flashcards' ? (<Link to="/flashcards"><MDBBtn color='elegant'>Flashcards</MDBBtn></Link>) : false }
      </nav>
    );
  };
}

export default NavBar;