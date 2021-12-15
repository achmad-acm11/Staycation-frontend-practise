// import Button from "elements/Button";
import Button from "elements/Button";
import Meta from "elements/Stepper/Meta";
import Number from "elements/Stepper/Number";
import Complete from "parts/Checkout/Complete";
// import BookingInformation from "parts/Checkout/BookingInformation";
// import Payment from "parts/Checkout/Payment";
import Header from "parts/Header";
import React, { Component } from "react";

export default class Checkout extends Component {
  render() {
    // return (
    //   <div className="contianer">
    //     <div
    //       className="row align-items-center justify-content-center text-center"
    //       style={{ height: "100vh" }}
    //     >
    //       <div className="col-3">
    //         Pilih kamar dahulu
    //         <div>
    //           <Button
    //             className="btn mt-5"
    //             type="button"
    //             isLight
    //             onClick={() => {
    //               this.props.history.goBack();
    //             }}
    //           >
    //             Back
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
    return (
      <>
        <Header {...this.props} isCentered />
        <Number style={{ marginBottom: 50 }} />
        <Meta />
        {/* <BookingInformation /> */}
        {/* <Payment /> */}
        <Complete />
        <section className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-3">
              <div className="d-grid gap-2">
                <Button className="btn mb-3" type="button" href="" isPrimary>
                  Continue to Book
                </Button>
                <Button className="btn" type="link" href="" isLight>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
