import React, { useState } from "react";
import { connect } from "react-redux";
import "css/Start.css";
function Start(props) {
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
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
      <h1>도다지프로젝트</h1>
      <p>개발 유형 검사</p>

      <div className="start">
        <form>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            onChange={handleName}
            onKeyPress={handleKeyPress}
          ></input>
        </form>
        <button onClick={handleClick}>시작하기</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { handleName: (name) => dispatch({ type: "setName", name: name }) };
};
export default connect(null, mapDispatchToProps)(Start);
