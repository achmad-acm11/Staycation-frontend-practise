import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from "./index";

const setup = () => {
  const data = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "Detail", pageHref: "" },
  ];

  const { container } = render(
    <Router>
      <Breadcrumb data={data} />
    </Router>
  );

  const breadcrumb = container.querySelector(".breadcrumb");

  return {
    breadcrumb,
  };
};

test("should have <ol> with className .breadcrumb and have text Home and Detail", () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("Detail");
});
