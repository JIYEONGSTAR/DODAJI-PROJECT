import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "css/Start.css";
function Start(props) {
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    props.handleName(name);
  };
  // const handleKeyPress = (e) => {
  //   if (e.key === "Enter") {
  //     handleClick();
  //   }
  // };
  return (
    <div>
      <div className="start">
        <form>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            onChange={handleName}
            // onKeyPress={handleKeyPress}
          ></input>
        </form>
        <Link to="/main">
          <button onClick={handleClick}>시작하기</button>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { handleName: (name) => dispatch({ type: "setName", name: name }) };
};
export default connect(null, mapDispatchToProps)(Start);
