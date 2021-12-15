import Button from "elements/Button";
import React from "react";
import propTypes from "prop-types";

export default function IconText(props) {
  let className = "logo-icon";
  if (props.isHeader) className += " navbar-brand";
  return (
    <Button className={className} href="" type="link">
      Stay<span className="text-gray-900">cation.</span>
    </Button>
  );
}

IconText.propTypes = {
  isHeader: propTypes.bool,
};
