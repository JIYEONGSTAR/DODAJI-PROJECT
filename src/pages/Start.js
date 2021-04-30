import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function Start(props) {
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    props.handleName(name);
  };
  return (
    <div>
      <form method="POST">
        <input
          type="text"
          placeholder="이름을 입력하세요"
          onChange={handleName}
        ></input>
      </form>
      <Link to="/main">
        <button onClick={handleClick}>시작하기</button>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { handleName: (name) => dispatch({ type: "setName", name: name }) };
};
export default connect(null, mapDispatchToProps)(Start);
