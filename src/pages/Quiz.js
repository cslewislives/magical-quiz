import React, {Component} from 'react';
import Quiz from 'react-quiz-component';
import quiz from '../api/quizQuestions';

class QuizPage extends Component {
  render() {
    return (
      <Quiz quiz={quiz} shuffle={true}/>
    )
  }
}

export default QuizPage;