import React from "react";
import IconCalendar from "assets/images/icon/icon-calendar.svg";
import "./index.scss";

export default function Date(props) {
  return (
    <div className={["input-date mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <span className="input-group-text">
          <img src={IconCalendar} alt="icon calendar" />
        </span>
        <input readOnly type="text" className="form-control" />
      </div>
    </div>
  );
}
