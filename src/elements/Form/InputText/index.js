import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function InputText(props) {
  const {
    value,
    type,
    placeholder,
    name,
    prepend,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const [HasError, setHasError] = useState(null);

  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };
    if (type === "email") {
      if (!pattern.test(event.target.value)) {
        setHasError("Email is Invalid");
      } else {
        setHasError(null);
      }
    }

    if (type === "tel") {
      if (event.target.validity.valid) {
        props.onChange(target);
      } else {
        props.onChange(target);
      }
    }
    props.onChange(target);
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && <div className="input-group-text">{prepend}</div>}
        <input
          name={name}
          type={type}
          pattern={pattern}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={["form-control", inputClassName].join(" ")}
        />
        {append && <div className="input-group-text">{append}</div>}
      </div>
      {HasError && <span className="error-helper">{HasError}</span>}
    </div>
  );
}

InputText.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please Type Here ....",
};

InputText.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
