import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Number(props) {
  return (
    <ol className={["stepper", props.className].join(" ")} style={props.style}>
      <li className="active">1</li>
      <li className="">2</li>
      <li className="">3</li>
    </ol>
  );
}

Number.propTypes = {
  className: propTypes.string,
  style: propTypes.string,
};
