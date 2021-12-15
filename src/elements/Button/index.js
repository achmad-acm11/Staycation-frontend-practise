import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button(props) {
  const className = [props.className];

  // Add Class From Boostrap
  if (props.isPrimary) className.push("btn-primary");
  if (props.isLight) className.push("btn-light");
  if (props.isLarge) className.push("btn-lg");
  if (props.isSmall) className.push("btn-sm");
  if (props.hasShadow) className.push("shadow");

  // Add Function EventListener onClick
  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  // Disabled Button when is Loading
  if (props.isDisabled || props.isLoading) {
    if (props.isDisabled) className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading....</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  // Set Button Type Link
  if (props.type === "link") {
    // button redirect to link external
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          // rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
          rel="noreferrer"
        >
          {props.children}
        </a>
      );
    } else {
      // button redirect to link app
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }
  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  href: propTypes.string,
  target: propTypes.string,
  className: propTypes.string,
  isPrimary: propTypes.bool,
  isLight: propTypes.bool,
  isExternal: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  //   isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
