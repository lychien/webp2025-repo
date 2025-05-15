import React from "react";

const Input = ({ id, placeholder, value, onChange, className }) => (
  <input id={id} placeholder={placeholder} value={value} onChange={onChange} className={className} />
);

export default Input;