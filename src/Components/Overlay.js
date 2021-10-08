import React from "react";
import "./Overlay.css";

const Overlay = (props) => {
  return (
    <div
      className="overlay"
      style={props.showModel ? { display: "block" } : { display: "none" }}
    >
      <button className="close" onClick={() => props.setShowModel(false)}>
        <span
          className="iconify"
          data-icon="ant-design:close-circle-outlined"
        ></span>
      </button>

      {props.children}
    </div>
  );
};

export default Overlay;
