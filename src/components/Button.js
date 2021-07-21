import React from "react";
import "css/Main.css";
function Button(props) {
  return (
    <div>
      <button className="mybtn">{props.sentence}</button>
    </div>
  );
}

export default Button;
