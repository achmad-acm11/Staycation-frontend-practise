import Button from "elements/Button";
import React from "react";

export default function Activities() {
  return (
    <section className="container">
      <h4 className="mb-3 fw-medium">Activity</h4>
      <div className="row">
        <div className="col-3">
          <div className="card">
            <div className="tag">
              Popular &nbsp;
              <span className="fw-light">Choice</span>
            </div>
            <figure className="img-wrapper">
              <img
                src="/images/img-featured-1.jpg"
                alt="Activities 1"
                className="img-cover"
              />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                href=""
                className="stretched-link d-block text-gray-800"
              >
                <h5 className="h4">Green Lake</h5>
              </Button>
              <span className="text-gray-500">Nature</span>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="tag">
              Popular &nbsp;
              <span className="fw-light">Choice</span>
            </div>
            <figure className="img-wrapper">
              <img
                src="/images/img-featured-1.jpg"
                alt="Activities 1"
                className="img-cover"
              />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                href=""
                className="stretched-link d-block text-gray-800"
              >
                <h5 className="h4">Green Lake</h5>
              </Button>
              <span className="text-gray-500">Nature</span>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="tag">
              Popular &nbsp;
              <span className="fw-light">Choice</span>
            </div>
            <figure className="img-wrapper">
              <img
                src="/images/img-featured-1.jpg"
                alt="Activities 1"
                className="img-cover"
              />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                href=""
                className="stretched-link d-block text-gray-800"
              >
                <h5 className="h4">Green Lake</h5>
              </Button>
              <span className="text-gray-500">Nature</span>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="tag">
              Popular &nbsp;
              <span className="fw-light">Choice</span>
            </div>
            <figure className="img-wrapper">
              <img
                src="/images/img-featured-1.jpg"
                alt="Activities 1"
                className="img-cover"
              />
            </figure>
            <div className="meta-wrapper">
              <Button
                type="link"
                href=""
                className="stretched-link d-block text-gray-800"
              >
                <h5 className="h4">Green Lake</h5>
              </Button>
              <span className="text-gray-500">Nature</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
