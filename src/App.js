import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import QuizPage from './pages/Quiz';


class App extends Component {

  Index() {
    return <h2>Home</h2>;
  }

  Users() {
    return <h2>Users</h2>;
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Ministry of Code</h2>
        </div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/quiz/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>

            <Route path="/" exact component={this.Index} />
            <Route path="/quiz/" component={QuizPage} />
            <Route path="/users/" component={this.Users} />
          </div>
        </Router>
      </div>
    );
  };
}

export default App;
