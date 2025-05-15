import React from "react";

const Alert = ({ variant = "info", children }) => {
  const styles = { destructive: { color: "red" }, success: { color: "green" }, warning: { color: "orange" }, info: { color: "blue" } };
  return <div style={styles[variant]}>{children}</div>;
};

export default Alert;