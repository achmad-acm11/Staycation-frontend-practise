import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Button from ".";

// Testing Disabled Button
test("should not allowed click button if isDisabled is present", () => {
  const { container } = render(<Button isDisabled></Button>);
  expect(container.querySelector("span.disabled")).toBeInTheDocument();
});
// Tesiting Loading Spinner Button
test("should render loading/spinner", () => {
  const { container, getByText } = render(<Button isLoading></Button>);

  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector("span.spinner-border")).toBeInTheDocument();
});
// Test render tag <a> link external
test("should render <a> tag", () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector("a")).toBeInTheDocument();
});
// Test render link router 
test('should render Link', () => {
    const { container } = render(
        <Router>
            {/* Tag Button will change to Tag Link for running in router */}
            <Button href="" type="link"></Button>
        </Router>
    )

    expect(container.querySelector("a")).toBeInTheDocument()
})

