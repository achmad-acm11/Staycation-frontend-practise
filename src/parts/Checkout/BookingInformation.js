import InputText from "elements/Form/InputText";
import React from "react";

export default function BookingInformation() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-5 border-end" style={{ paddingRight: 80}}>
          <div className="card">
            <figure className="img-wrapper">
              <img
                src="/images/img-featured-1.jpg"
                alt="Item 1"
                className="img-cover"
              />
              <div className="row align-items-center">
                <div className="col">
                  <div className="meta-wrapper">
                    <h5 className="h4">Podo Wae</h5>
                    <span className="text-gray-500">Madiun, Indonesia</span>
                  </div>
                </div>
                <div className="col-auto">
                  $480 USD <span className="text-gray-500">per</span> 2 nights
                </div>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          <label htmlFor="firstName">First Name</label>
          <InputText />
          <label htmlFor="lastName">Last Name</label>
          <InputText />
          <label htmlFor="emailAddress">Email Address</label>
          <InputText />
          <label htmlFor="phoneNumber">Phone Number</label>
          <InputText />
        </div>
      </div>
    </div>
  );
}
