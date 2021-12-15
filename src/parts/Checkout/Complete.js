import React from "react";
import ImageComplete from "assets/images/completed.jpg";

export default function Complete() {
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content-center text-center">
        <div className="col-4">
          <img
            src={ImageComplete}
            alt="Complete Checkout"
            className="img-fluid"
          />
          <p className="text-gray-900">
            We will inform you via email later once the transaction has been
            accepted
          </p>
        </div>
      </div>
    </div>
  );
}
