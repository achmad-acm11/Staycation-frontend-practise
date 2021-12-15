import Breadcrumb from "elements/Breadcrumb";
import React from "react";

export default function PageDetailTitle(props) {
  return (
    <section className="page-detal-title-section container spacing-sm">
      <div className="row align-items-center">
        <div className="col">
          <Breadcrumb />
        </div>
        <div className="col-auto text-center">
          <h1 className="h2">Village Angga</h1>
          <span className="text-gray-400">Bogor, Indonesia</span>
        </div>
        <div className="col"></div>
      </div>
    </section>
  );
}
