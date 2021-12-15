import Button from "elements/Button";
import React from "react";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">For Beginner</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="">
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="">
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyright">
            Copyright 2019 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
