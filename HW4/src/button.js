import React from "react";

const Button = ({ children, onClick, className }) => (
  <button className={className} onClick={onClick}>{children}</button>
);

export default Button;