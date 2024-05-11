import React, { Component } from "react";

class QuizComponent extends Component {
  render() {
    return (
      <>
        <div className="quiz-container">
            <div className="quiz-subcontainer">
              <h2>Question</h2>
              <div className="ques-container">
                <div className="ques-count">
                  <span>1 of 15</span>
                </div>
                <h4>Which is the only mammal that can jump?</h4>
                <div className="options">
                  <button className="options-btn" id="a">Dog</button>
                  <button className="options-btn" id="b">Elephant</button>
                  <button className="options-btn" id="c">Goat</button>
                  <button className="options-btn" id="d">Lion</button>
                </div>

                <div className="buttons">
                  <button id="prev">Previous</button>
                  <button id="next">Next</button>
                  <button id="quit">Quit</button>
                </div>
              </div>
            </div>
        </div>
      </>
    );
  }
}
export default QuizComponent;