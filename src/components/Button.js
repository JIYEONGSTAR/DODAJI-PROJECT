import React from "react";
import "css/Main.css";
function Button(props) {
  return (
    <div>
      <button className="mybtn" value={props.value}>{props.sentence}</button>
    </div>
  );
}

export default Button;
