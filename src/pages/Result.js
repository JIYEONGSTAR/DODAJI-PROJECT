import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "css/Result.css";
// import axios from "axios";

const Result = ({ name, finalResult, realResult }) => {
  let result = realResult.find((data) => {
    return String(data.realResultId) === finalResult;
  });

  return (
    <div>
      <div className="result">
        {name}의 결과는? {result.realResultDescription}
      </div>
      <div className="img">
        <img
          className="img_img"
          src={"/" + result.realResultDescription + ".jpg"}
          alt=""
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    finalResult: state.finalResult,
    realResult: state.realResult,
  };
};

export default connect(mapStateToProps)(Result);
