import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }
  showNextQuestion() {
    this.setState(state => {
      return { quiz_position: state.quiz_position + 1 };
    });
  }

  handleResetClick() {
    this.setState(state => {
      return { quiz_position: (quiz_position = 1) };
    });
    return this.props.resetClickHandler();
  }

  render() {
    const isQuizEnd =
      this.state.quiz_position - 1 === quizData.quiz_questions.length;
    if (isQuizEnd === true) {
      return <QuizEnd resetClickHandler={this.handleResetClick.bind(this)} />;
    } else {
      return (
        <div>
          <QuizQuestion
            quiz_question={
              quizData.quiz_questions[this.state.quiz_position - 1]
            }
            showNextQuestionHandler={this.showNextQuestion.bind(this)}
          />
        </div>
      );
    }
  }
}

export default Quiz;
