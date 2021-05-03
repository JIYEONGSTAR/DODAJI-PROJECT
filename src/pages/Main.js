import React, { useState, useEffect } from "react";
import SelectCard from "components/cards/SelectCard";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "css/Main.css";
function Main(props) {
  console.log(props.question);
  console.log(props.answer1);
  console.log(props.answer2);
  console.log(props.answer);
  // let data = props.data;
  // let [nowIndex, setNowIndex] = useState(0);
  // const [nowQ, setNowQ] = useState(data[nowIndex].q);
  // const [nowA, setNowA] = useState(data[nowIndex].a);
  // const [finish, setFinish] = useState(false);
  // const handleClick = (e) => {
  //   if (nowIndex === 15) {
  //     setFinish(true);
  //   } else setNowIndex(nowIndex + 1);
  // };
  // useEffect(() => {
  //   if (finish) {
  //     setNowQ(null);
  //     setNowA(null);
  //   } else {
  //     setNowQ(data[nowIndex].q);
  //     setNowA(data[nowIndex].a);
  //   }
  // });
  return (
    <div>
      {/* {finish ? (
        <Link to={`/result`}>
          <button>결과보러가기</button>
        </Link>
      ) : (
        <div>
          <SelectCard
            question={nowQ}
            answer1={nowA[0].answer}
            answer2={nowA[1].answer}
            nowIndex={nowIndex + 1}
            onClick={handleClick}
          />
        </div>
      )}
    </div> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { question: state.question,answer:state.answer, answer1:state.answer1,answer2:state.answer2 };
};

const mapDispatchToProps = (dispatch) => {
  return { handleAnswer: (id) => dispatch({ type: "handleAnswer", id: id }) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
