import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function SelectCard(props) {
  const question = props.question;
  const answer1 = props.answer1;
  const answer2 = props.answer2;
  const index = props.nowIndex;

  const useStyles = makeStyles({
    root: {
      padding: "20px",
      background: "white",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px white",
      color: "black",
      width: 100 - (100 / 15) * index + "%",
      height: "5px",
    },
  });
  const onClick = (e) => {
    props.onClick(e.target.value, question.typeId);
  };
  const onBack = () => {
    props.onBack(question.typeId);
  };
  const classes = useStyles();
  return (
    <div className="card">
      <div className="statusBox">
        <div className={classes.root}>{index}/15</div>
      </div>
      <div className="questionBox">{question.questionName}</div>
      <div className="answerBox">
        <button
          className="answerBtn"
          onClick={onClick}
          value={answer1.resultId}
        >
          {answer1.answerName}
        </button>
        <button
          className="answerBtn"
          onClick={onClick}
          value={answer2.resultId}
        >
          {answer2.answerName}
        </button>
      </div>
      <div className="backBox">
        <button className="backBtn" onClick={onBack}>
          <i class="fas fa-chevron-circle-left"></i>
        </button>
      </div>
    </div>
  );
}

export default SelectCard;
