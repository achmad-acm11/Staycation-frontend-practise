import Button from "elements/Button";
import React from "react";
import "./index.scss";
import propTypes from "prop-types";

export default function Breadcrumb(props) {
  // Add class name
  const className = ["breadcrumb", props.className];
  return (
    <nav aria-label="breadcrumb">
      <ol className={className.join(" ")}>
        {props.data.map((item, index) => {
          return (
            <li
              key={index}
              className={`breadcrumb-item ${
                index === props.data.length - 1 ? "active" : ""
              }`}
            >
              {index === props.data.length - 1 ? (
                item.pageTitle
              ) : (
                <Button type="link" href="">
                  Home
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};
