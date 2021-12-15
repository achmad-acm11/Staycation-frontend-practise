import React from "react";
import "./index.scss";

export default function InputFile(props) {
  return (
    <div className={["input-file mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <input type="file" className="d-none" />
        <input
          type="text"
          className={["form-control", props.className].join(" ")}
        />
      </div>
    </div>
  );
}
