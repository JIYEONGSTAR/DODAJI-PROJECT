import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "css/Result.css";
// import axios from "axios";

const Result = ({ name, finalResult }) => {
  return (
    <div>
      <div className="result">{name}의 결과는?</div>
      {finalResult}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { name: state.name, finalResult: state.finalResult };
};

export default connect(mapStateToProps)(Result);
