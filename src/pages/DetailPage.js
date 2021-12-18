import Activities from "parts/Activities";
import BookingForm from "parts/BookingForm";
import FeaturedImage from "parts/FeaturedImage";
import Footer from "parts/Footer";
import Header from "parts/Header";
import PageDetailDescription from "parts/PageDetailDescription";
import PageDetailTitle from "parts/PageDetailTitle";
import Testimony from "parts/Testimony";
import React, { Component } from "react";
import detailData from "json/itemDetails.json";

export default class DetailPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    window.title = "Details Page";
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Detail", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={detailData} />
        <FeaturedImage data={detailData.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pe-5">
              <PageDetailDescription data={detailData} />
            </div>
            <div className="col-5">
              <BookingForm itemDetail={detailData} />
            </div>
          </div>
        </section>
        <Activities data={detailData.activities} />
        <Testimony data={detailData.testimonial} />
        <Footer />
      </>
    );
  }
}
