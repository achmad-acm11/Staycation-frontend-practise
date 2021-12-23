import InputText from "elements/Form/InputText";
import React from "react";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-5 border-end" style={{ paddingRight: 80 }}>
          <div className="card">
            <figure className="img-wrapper">
              <img
                src={`${process.env.REACT_APP_HOST}/${ItemDetails.imageId[0].imageUrl}`}
                alt="Item 1"
                className="img-cover"
              />
              <div className="row align-items-center">
                <div className="col">
                  <div className="meta-wrapper">
                    <h5 className="h4">{ItemDetails.title}</h5>
                    <span className="text-gray-500">
                      {ItemDetails.city}, {ItemDetails.country}
                    </span>
                  </div>
                </div>
                <div className="col-auto">
                  ${+checkout.duration * ItemDetails.price} USD{" "}
                  <span className="text-gray-500">per</span> {checkout.duration}
                  {+checkout.duration > 1 ? " night" : " nights"}
                </div>
              </div>
            </figure>
          </div>
        </div>
        <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
          <label htmlFor="firstName">First Name</label>
          <InputText
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={props.onChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <InputText
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={props.onChange}
          />
          <label htmlFor="email">Email Address</label>
          <InputText
            id="email"
            name="email"
            value={data.email}
            onChange={props.onChange}
          />
          <label htmlFor="phone">Phone Number</label>
          <InputText
            id="phone"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
}
