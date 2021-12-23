import Activities from "parts/Activities";
import BookingForm from "parts/BookingForm";
import FeaturedImage from "parts/FeaturedImage";
import Footer from "parts/Footer";
import Header from "parts/Header";
import PageDetailDescription from "parts/PageDetailDescription";
import PageDetailTitle from "parts/PageDetailTitle";
import Testimony from "parts/Testimony";
import React, { Component } from "react";
// import detailData from "json/itemDetails.json";

import { connect } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

class DetailPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    // window.title = "Details Page";

    if (!this.props.page[this.props.match.params.id]) {
      this.props
        .fetchPage(
          `/detail-page/${this.props.match.params.id}`,
          this.props.match.params.id
        )
        .then((response) => {
          document.title = `Staycation | ${response.title}`;
        });
    }
  }
  render() {
    const { page, match } = this.props;

    if (!page[match.params.id]) {
      return null;
    }
    
    const detailData = page[match.params.id];

    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "Detail", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={detailData} />
        <FeaturedImage data={detailData.imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pe-5">
              <PageDetailDescription data={detailData} />
            </div>
            <div className="col-5">
              <BookingForm
                itemDetail={detailData}
                startBooking={this.props.checkoutBooking}
              />
            </div>
          </div>
        </section>
        <Activities data={detailData.activityId} />
        <Testimony data={detailData.testimonial} />
        <Footer />
      </>
    );
  }
}

const mapStateProps = (state) => ({
  page: state.page,
});
export default connect(mapStateProps, { checkoutBooking, fetchPage })(
  DetailPage
);
