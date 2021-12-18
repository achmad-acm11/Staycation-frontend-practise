import React from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Number(props) {
  const KeysOfData = Object.keys(props.data);
  return (
    <ol className={["stepper", props.className].join(" ")} style={props.style}>
      {KeysOfData.map((item, index) => {
        let isActive = item === props.currentStep ? "active" : "";
        if (index === KeysOfData.length - 1) {
          return null;
        }
        return (
          <li key={`step-${index + 1}`} className={isActive}>
            {index + 1}
          </li>
        );
      })}
    </ol>
  );
}

Number.propTypes = {
  data: propTypes.object,
  className: propTypes.string,
  currentStep: propTypes.string,
};
