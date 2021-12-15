import React from "react";
import "./index.scss";

export default function Number(props) {
  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <span className="input-group-text minus">-</span>
        <input
          pattern="[0-9]*"
          className="form-control"
          placeholder="0"
          value={0}
        />
        <span className="input-group-text plus">+</span>
      </div>
    </div>
  );
}
