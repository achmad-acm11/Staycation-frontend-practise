import React from "react";
import "./index.scss";

export default function InputText(props) {
  return (
    <div className={["input-text mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <input
          type="text"
          className={["form-control", props.className].join(" ")}
        />
      </div>
    </div>
  );
}
