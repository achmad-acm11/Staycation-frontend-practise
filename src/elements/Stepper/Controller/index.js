import React from "react";

export default function index(props) {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-3">
          <div className="d-grid gap-2">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
