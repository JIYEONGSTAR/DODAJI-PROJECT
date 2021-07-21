import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AiFillLeftCircle } from "react-icons/ai";
import Button from "components/Button";
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
        <div onClick={onClick}>
          <Button value={answer1.resultId} sentence={answer1.answerName} />
        </div>
        <div onClick={onClick}>
          <Button value={answer2.resultId} sentence={answer2.answerName} />
        </div>
      </div>
      <div className="backBox">
        <button className="backBtn" onClick={onBack}>
          <div>
            <AiFillLeftCircle />
          </div>
        </button>
      </div>
    </div>
  );
}

export default SelectCard;
