import React from "react";

const cardStyles = {
  background: "whitesmoke",
  borderRadius: 3,
  width: "250px",
  height: "250px",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  top: 0
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>
    {/* <img style={{...cardStyles, zIndex }  } /> */}
    {/* src={profiles[0].image} */}

    {children}
  </div>
);

export default Card;
