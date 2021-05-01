import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function SelectCard(props) {
  const question = props.question;
  const answer1 = props.answer1;
  const answer2 = props.answer2;
  const index = props.nowIndex;
  const useStyles = makeStyles({
    root: {
      padding: "20px",
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "black",
      width: 100 - (100 / 16) * index + "%",
      height: "5px",
    },
  });

  const classes = useStyles();
  return (
    <div className="card">
      <div className={classes.root}>{index}/16</div>
      <span>{question}</span>
      <div>
        <button onClick={props.onClick} value="answer1">
          {answer1}
        </button>
        <button onClick={props.onClick} value="answer2">
          {answer2}
        </button>
      </div>
    </div>
  );
}

export default SelectCard;
