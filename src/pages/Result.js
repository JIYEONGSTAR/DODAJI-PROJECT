import React from "react";
import { connect } from "react-redux";
import "css/Result.css";
function Result(props) {
  return <div className="result">{props.name}의 결과는?</div>;
}

const mapStateToProps = (state) => {
  return { name: state.name };
};

// const mapDispatchToProps = (dispatch) => {
//   return { handleAnswer: (id) => dispatch({ type: "handleAnswer", id: id }) };
// };
export default connect(mapStateToProps)(Result);
