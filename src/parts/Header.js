import Button from "elements/Button";
import React from "react";
import BrandIcon from "./IconText";
import propTypes from "prop-types";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? "active" : "";
  };
  if (props.isCentered) {
    return (
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navber-expand-lg navbar-light">
            <div className="container-fluid justify-content-center">
              <BrandIcon isHeader />
            </div>
          </nav>
        </div>
      </header>
    );
  }
  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <BrandIcon isHeader />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className={`nav-item ${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="">
                    Home
                  </Button>
                </li>
                <li className="nav-item">
                  <Button className="nav-link" type="link" href="">
                    Browse by
                  </Button>
                </li>
                <li className="nav-item">
                  <Button className="nav-link" type="link" href="">
                    Stories
                  </Button>
                </li>
                <li className="nav-item">
                  <Button className="nav-link" type="link" href="">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

Header.propsTypes = {
  isCentered: propTypes.bool,
};
