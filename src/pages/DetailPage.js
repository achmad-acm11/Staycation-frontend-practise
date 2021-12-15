import Activities from "parts/Activities";
import BookingForm from "parts/BookingForm";
import FeaturedImage from "parts/FeaturedImage";
import Footer from "parts/Footer";
import Header from "parts/Header";
import PageDetailDescription from "parts/PageDetailDescription";
import PageDetailTitle from "parts/PageDetailTitle";
import Testimony from "parts/Testimony";
import React, { Component } from "react";

export default class DetailPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle />
        <FeaturedImage />
        <section className="container">
          <div className="row">
            <div className="col-7 pe-5">
              <PageDetailDescription />
            </div>
            <div className="col-5">
              <BookingForm />
            </div>
          </div>
        </section>
        <Activities />
        <Testimony />
        <Footer />
      </>
    );
  }
}
