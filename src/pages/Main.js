import React, { useState, useEffect } from "react";
import SelectCard from "components/cards/SelectCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "css/Main.css";

function Main(props) {
  const question = props.question;
  const answer1 = props.answer1;
  const answer2 = props.answer2;
  const [nowIndex, setNowIndex] = useState(0);
  const [nowQ, setNowQ] = useState(question[nowIndex].questionName);
  const [nowA1, setNowA1] = useState(answer1[nowIndex].answerName);
  const [nowA2, setNowA2] = useState(answer2[nowIndex].answerName);
  const [preresult, setPreresult] = useState();
  const [finish, setFinish] = useState(false);
  const handleClick = (e) => {
    let result =
      e === "1" ? answer1[nowIndex].resultId : answer2[nowIndex].resultId;
    setPreresult(
      e === "1" ? answer1[nowIndex].resultId : answer2[nowIndex].resultId
    );
    console.log(result);
    props.handleAnswer(result);
    if (nowIndex === 14) {
      setFinish(true);
    } else setNowIndex(nowIndex + 1);
  };

  const handleBack = (e) => {
    switch (nowIndex) {
      case 0:
        alert("첫번째 문항입니다.");
        break;
      default:
        props.handleBack(preresult);
        setNowIndex(nowIndex - 1);
        break;
    }
  };
  const handleResult = () => {
    props.handleResult();
  };
  useEffect(() => {
    if (finish) {
      setNowQ(null);
      setNowA1(null);
      setNowA2(null);
    } else {
      setNowQ(question[nowIndex].questionName);
      setNowA1(answer1[nowIndex].answerName);
      setNowA2(answer2[nowIndex].answerName);
    }
  });
  return (
    <div>
      {finish ? (
        <Link to={`/result`}>
          <button onClick={handleResult}>결과보러가기</button>
        </Link>
      ) : (
        <div>
          <SelectCard
            question={nowQ}
            answer1={nowA1}
            answer2={nowA2}
            nowIndex={nowIndex + 1}
            onClick={handleClick}
            onBack={handleBack}
          />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    question: state.question,
    answer: state.answer.answerId,
    answer1: state.answer1,
    answer2: state.answer2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAnswer: (result) =>
      dispatch({ type: "handleAnswer", result: result }),
    handleResult: () => {
      dispatch({ type: "handleResult" });
    },
    handleBack: (result) => {
      dispatch({ type: "handleBack", result: result });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
