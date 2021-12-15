import Button from "elements/Button";
import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconTravel from "assets/images/icon/icon-traveler.svg";
import IconTreasure from "assets/images/icon/icon-treasure.svg";
import IconCities from "assets/images/icon/icon-cities.svg";
import FormatNumber from "utils/formatNumber";

export default function Hero() {
  return (
    <section className="hero-section container pt-4">
      <div className="row align-items-center justify-content-between">
        <div className="col-auto hero-content" style={{ width: 555 }}>
          <h1 className="fw-bold mb-3 hero-content-heading">
            Forget Busy Work <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 fw-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button className="btn px-5" hasShadow isPrimary>
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-auto" style={{ marginRight: "50px" }}>
              <img width={32} height={32} src={IconTravel} alt="Icon Travel" />
              <h6 className="mt-3">
                {FormatNumber(80409)} &nbsp;
                <span className="text-gray-500 fw-light">travelers</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: "50px" }}>
              <img
                width={32}
                height={32}
                src={IconTreasure}
                alt="Icon Treasure"
              />
              <h6 className="mt-3">
                {FormatNumber(862)} &nbsp;
                <span className="text-gray-500 fw-light">treasures</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: "50px" }}>
              <img src={IconCities} alt="Icon Cities" width={32} height={32} />
              <h6 className="mt-3">
                {FormatNumber(1492)} &nbsp;
                <span className="text-gray-500 fw-light">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 ps-5">
          <div
            className="position-relative ms-auto"
            style={{ height: 410, width: 520 }}
          >
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={ImageHeroFrame}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
