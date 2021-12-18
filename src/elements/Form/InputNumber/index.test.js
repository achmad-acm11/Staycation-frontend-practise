import { fireEvent, render } from "@testing-library/react";
import React, { Component } from "react";
import InputNumber from "./index";

export default class TestInput extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <InputNumber
        max={30}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector("input.form-control[name='value']");

  return { container, input };
};

test("should able to change value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value).toBe("23");
});

test("should not be to change when reach max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });

  expect(input.value).toBe("");
});
