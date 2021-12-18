import React, { useState, useRef } from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function InputFile(props) {
  const [FileName, setFileName] = useState("");

  const {
    placeholder,
    name,
    accept,
    prepend,
    append,
    outerClassName,
    inputClassName,
  } = props;

  const refInputFile = useRef(null);

  const onChange = (event) => {
    setFileName(event.target.value);
    props.onChange({
      target: {
        nama: event.target.name,
        value: event.target.files,
      },
    });
  };
  return (
    <div className={["input-file mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && <div className="input-group-text">{prepend}</div>}
        <input
          accept={accept}
          ref={refInputFile}
          name={name}
          value={FileName}
          onChange={onChange}
          type="file"
          className="d-none"
        />
        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={FileName}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
        />
        {append && <div className="input-group-text">{append}</div>}
      </div>
    </div>
  );
}

InputFile.defaultProps = {
  placeholder: "Browse a File ....",
};
InputFile.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
};
