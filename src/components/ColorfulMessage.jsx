import React from "react";
import "./styles.css";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  return <p style={{ color: color }}>{children}</p>;
};

export default ColorfulMessage;
