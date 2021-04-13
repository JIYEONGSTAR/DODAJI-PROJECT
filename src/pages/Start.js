import React from "react";
import { Link } from "react-router-dom";
function Start() {
  return (
    <div>
      <Link to="/main">
        <button>시작하기</button>
      </Link>
    </div>
  );
}

export default Start;
