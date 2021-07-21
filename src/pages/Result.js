import { connect } from "react-redux";
import "css/Result.css";
import { Link } from "react-router-dom";

import Button from "components/Button";

const Result = ({ name, finalResult, realResult }) => {
  let result = realResult.find((data) => {
    return String(data.realResultId) === finalResult;
  });

  return (
    <div className="result">
      <div className="realResult">
        <div>
          {name}의 결과는?
          <br /> {result.realResultDescription}
        </div>
      </div>

      <img src={"/" + result.realResultDescription + ".jpg"} alt="" />

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
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    finalResult: state.finalResult,
    realResult: state.realResult,
  };
};

export default connect(mapStateToProps)(Result);
