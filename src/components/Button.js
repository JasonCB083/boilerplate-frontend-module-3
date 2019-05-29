import React from "react";

const buttonStyles = {
  color: "white",
  backgroundColor: "rgba(241,55,60,1)",
  borderRadius: "25px",
  padding: "11px 26px",
  fontSize: "20px",
  width: "150px",
  borderStyle: "none",
  boxShadow: "1px 2px 6px 2px rgba(0, 0, 0, 0.164)",
  textTransform: "uppercase",
};

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{ ...buttonStyles }}>
    {children}
  </button>
);

export default Button;
