import React, { useState } from "react";
import { connect } from "react-redux";
import "css/Start.css";
import { Link } from "react-router-dom";
import Button from "components/Button";
function Start(props) {
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    // debouncing, throttling 이거 사용하면 좋음
  };

  const handleClick = () => {
    //빈 문자열일때는 알림설정하고 아니면 main으로 넘어가기
    switch (name) {
      case "":
        alert("이름을 입력하세요");
        break;
      default:
        props.handleName(name);
        props.history.push("/main");
        break;
    }
  };

  const handleKeyPress = (e) => {
    //엔터키로 입력하기
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="box">
      <div>
        <img className="dodaji" src="/dodajiproject.png" alt=""></img>
      </div>
      <div className="start">
        <form>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            onChange={handleName}
            onKeyPress={handleKeyPress}
          ></input>
        </form>
        <div onClick={handleClick}>
          <Button sentence="시작하기" />
        </div>
      </div>

      <div className="others">
        <Link to={`/others`}>
          <Button sentence="다른사람 결과 보러가기" />
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { handleName: (name) => dispatch({ type: "setName", name: name }) };
};
export default connect(null, mapDispatchToProps)(Start);
