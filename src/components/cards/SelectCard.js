import React from "react";
function SelectCard(props) {
  const question = props.question;
  const answer1 = props.answer1;
  const answer2 = props.answer2;

  return (
    <div className="card">
      <p>{question}</p>
      <button onClick={props.onClick} value="answer1">
        {answer1}
      </button>
      <button onClick={props.onClick} value="answer2">
        {answer2}
      </button>
    </div>
  );
}

export default SelectCard;
