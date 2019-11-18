import React, { Component } from "react";

let quizData = require("./quiz_data.json");

export class Quiz extends Component {
  render() {
    return (
      <div>
        <div className="QuizQuestion">
          {quizData.quiz_questions[0].instruction_text}
        </div>
      </div>
    );
  }
}

export default Quiz;
