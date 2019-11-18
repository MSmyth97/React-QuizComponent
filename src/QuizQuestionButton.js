import React, { Component } from "react";

class QuizQuestionButton extends Component {
  render() {
    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>
          {this.props.button_text}
        </button>
      </li>
    );
  }
  handleClick = () => {
    this.props.clickHandler({ button_text });
    if (button_text === this.props.quiz_question.answer) {
      this.props.showNextQuestionHandler();
    }
  };
}
export default QuizQuestionButton;
