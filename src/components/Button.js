import React from "react";
import "./Button.css";

import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]; //0 index is btn-primary

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; //0 index is btn-medium

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        //onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
