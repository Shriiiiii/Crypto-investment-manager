import React from "react";

const Button = ({ children, variant = "primary", style, ...props }) => {
  const className =
    variant === "primary" ? "btn btn-primary" : "btn btn-secondary";

  return (
    <button className={className} style={style} {...props}>
      {children}
    </button>
  );
};

export default Button;
