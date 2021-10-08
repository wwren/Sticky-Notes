import React from "react";
import "./StickyNote.css";

const StikyNote = ({ title, paragraph, color }) => {
  return (
    <div className={`sticky_note ${color}`}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <div className="bottom">
        <a href="www.google.com">
          <span
            className="iconify"
            data-icon="ant-design:delete-outlined"
          ></span>
          <span>Delete</span>
        </a>
        <a href="www.google.com">
          <span className="iconify" data-icon="carbon:face-add"></span>
          <span>Save</span>
        </a>
      </div>
    </div>
  );
};

export default StikyNote;
