import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuizPage from './pages/Quiz';
import Landing from './pages/Landing';
import {module1,module2,module3} from './api/quizQuestions';
import FlashCards from './pages/Flashcards';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Landing}/>
          <Route path="/flashcards" exact component={FlashCards}/>
          <Route path="/quiz/module1" render={() => <QuizPage module={module1}/>} />
          <Route path="/quiz/module2" render={() => <QuizPage module={module2}/>} />
          <Route path="/quiz/module3" render={() => <QuizPage module={module3}/>} />
        </div>
      </Router>
    );
  };
}

export default App;
