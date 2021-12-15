import React from "react";
import Number from "elements/Form/InputNumber";
import Date from "elements/Form/InputDate";
import Button from "elements/Button";

export default function BookingForm() {
  return (
    <div className="card card-bordered" style={{ padding: "60px 80px" }}>
      <h4 className="mb-3">Start Booking</h4>
      <h5 className="h2 mb-4" style={{ color: "#1ABC9C" }}>
        $280 &nbsp;
        <span className="text-gray-500 fw-light">per night</span>
      </h5>
      <label htmlFor="duration">How long you will stay?</label>
      <Number />
      <label htmlFor="date">Pick a date</label>
      <Date />
      <h6 className="text-gray-500 fw-light">
        You Will Pay &nbsp;
        <span className="text-gray-900">$480 USD</span> &nbsp; per &nbsp;
        <span className="text-gray-900">2 nights</span>
      </h6>
      <div className="d-grid gap-2 mt-4">
        <Button className="btn" hasShadow isPrimary>
          {" "}
          Continue to book{" "}
        </Button>
      </div>
    </div>
  );
}
