import React from "react";

export default function index(props) {
  return <div>{props.data[props.current] && props.data[props.current].content}</div>;
}
