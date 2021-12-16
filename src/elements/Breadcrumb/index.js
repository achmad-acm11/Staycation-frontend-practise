import Button from "elements/Button";
import React from "react";
import "./index.scss";

export default function Breadcrumb(props) {
  // Add class name
  const className = ["breadcrumb", props.className];
  return (
    <nav aria-label="breadcrumb">
      <ol className={className.join(" ")}>
        <li className="breadcrumb-item">
          <Button type="link" href="">
            Home
          </Button>
        </li>
        <li className="breadcrumb-item active">House Details</li>
      </ol>
    </nav>
  );
}
