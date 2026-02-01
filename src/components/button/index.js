import React from "react";

const Button = ({ children, onClick, disabled, className, variant }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${variant || ""} ${className || ""}`}
      data-testid="custom-button"
    >
      {children}
    </button>
  );
};

export default Button;
