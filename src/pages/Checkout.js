// import Button from "elements/Button";
import Button from "elements/Button";
// import Meta from "elements/Stepper/Meta";
// import Number from "elements/Stepper/Number";
import BookingInformation from "parts/Checkout/BookingInformation";
import Complete from "parts/Checkout/Complete";
import Payment from "parts/Checkout/Payment";
import Header from "parts/Header";
import React, { Component } from "react";
import Stepper, {
  Numbering,
  Meta,
  Controller,
  MainContent,
} from "elements/Stepper/index";

// import detailsData from "json/itemDetails.json";

import { connect } from "react-redux";
import { submitBooking } from "store/actions/checkout";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: [event.target.value],
      },
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    document.title = "Staycation | Checkout";
  }

  _Submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("idItem", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", data.bankName);
    payload.append("image", data.proofPayment[0][0]);
    // payload.append("bankId", checkout.bankId);

    // for (var pair of payload.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    this.props.submitBooking(payload).then(() => {
      nextStep();
    });
  };
  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;

    if (!checkout) {
      return (
        <div className="contianer">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-3">
              Pilih kamar dahulu
              <div>
                <Button
                  className="btn mt-5"
                  type="button"
                  isLight
                  onClick={() => {
                    this.props.history.goBack();
                  }}
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    // const checkout = {
    //   duration: 3,
    // };

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instruction below",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      complete: {
        title: "Complete Checkout",
        description: null,
        content: <Complete />,
      },
    };
    return (
      <>
        <Header {...this.props} isCentered />
        <Stepper steps={steps} initialStep="bookingInformation">
          {(prevStep, nextStep, CurrentStep, steps) => {
            return (
              <>
                <Numbering
                  data={steps}
                  currentStep={CurrentStep}
                  style={{ marginBottom: 50 }}
                />
                <Meta data={steps} current={CurrentStep} />
                <MainContent data={steps} current={CurrentStep} />
                {CurrentStep === "bookingInformation" && (
                  <Controller>
                    {data.firstName !== "" &&
                      data.lastName !== "" &&
                      data.email !== "" &&
                      data.phone !== "" && (
                        <Button
                          className="btn mb-3"
                          type="button"
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      )}
                    <Button
                      className="btn"
                      // type="link"
                      // href={`properties/1`}
                      onClick={() => {
                        this.props.history.goBack();
                      }}
                      isLight
                    >
                      Cancel
                    </Button>
                  </Controller>
                )}
                {CurrentStep === "payment" && (
                  <Controller>
                    {data.proofPayment !== "" &&
                      data.bankHolder !== "" &&
                      data.bankName !== "" && (
                        <Button
                          className="btn mb-3"
                          type="button"
                          isPrimary
                          hasShadow
                          onClick={() => this._Submit(nextStep)}
                        >
                          Continue to Book
                        </Button>
                      )}
                    <Button
                      className="btn"
                      type="button"
                      onClick={prevStep}
                      isLight
                    >
                      Cancel
                    </Button>
                  </Controller>
                )}
                {CurrentStep === "complete" && (
                  <Controller>
                    <Button
                      className="btn"
                      type="link"
                      onClick={prevStep}
                      isPrimary
                      href=""
                    >
                      Back to Home
                    </Button>
                  </Controller>
                )}
              </>
            );
          }}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

export default connect(mapStateToProps, { submitBooking })(Checkout);
