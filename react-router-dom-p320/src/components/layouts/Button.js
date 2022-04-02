import React from "react";

function Button({ onClick, text = "" }) {
  return <button onClick={onClick}>Go to {text}</button>;
}

export default Button;
