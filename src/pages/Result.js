import React from "react";
import { connect } from "react-redux";
import "css/Result.css";
function Result(props) {
  return (
    <div>
      <div className="result">{props.name}의 결과는?</div>
      {props.finalResult}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { name: state.name, finalResult: state.finalResult };
};

export default connect(mapStateToProps)(Result);
