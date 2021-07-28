import React from "react";
import { Link } from "react-router-dom";
import Button from "components/Button";
import "css/Result.css";

function ResultOnly({ match }) {
  const resultAbout = match.params.resultD;
  return (
    <div className="result">
      <img src={"/" + resultAbout + ".jpg"} alt="" />
      <div className="to">
        <Link to="/">
          <Button sentence="메인화면으로"></Button>
        </Link>
        <Link to="/others">
          <Button sentence="다른사람결과보러가기" />
        </Link>
      </div>
    </div>
  );
}

export default ResultOnly;
