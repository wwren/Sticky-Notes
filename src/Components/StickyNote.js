import React from "react";
import "./StickyNote.css";
import { putNewSticker, deleteSticker } from "../APIs.js";
import { useAlert } from "react-alert";

const StikyNote = ({ props, setStickers }) => {
  const { title, paragraph, color, date, datetime, id } = props;
  const alert = useAlert();

  const handleSave = async (e) => {
    const stickerCopy = { ...props };
    const res = await putNewSticker(stickerCopy);
    if (res.success) {
      alert.show("Added to Memory!", { type: "success" });
    } else {
      alert.show("Error! Try Again!", { type: "error" });
    }
  };

  const handleDelete = async () => {
    // delete from database and state or just state
    if (id) {
      setStickers((prev) => prev.filter((ele) => ele.id !== id));
      const res = await deleteSticker(id);
      if (res.success) {
        alert.show("Deleted from Memory!", { type: "info" });
      } else {
        alert.show("Error! Try Again!", { type: "error" });
      }
    } else {
      console.log("id is null");
      setStickers((prev) => prev.filter((ele) => ele.datetime !== datetime));
    }
  };

  return (
    <div className={`sticky_note ${color}`}>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <div className="bottom">
        <a onClick={(e) => handleDelete(e)}>
          <span
            className="iconify"
            data-icon="ant-design:delete-outlined"
          ></span>
          <span>Delete</span>
        </a>
        <a onClick={() => handleSave()}>
          <span className="iconify" data-icon="carbon:face-add"></span>
          <span>Save</span>
        </a>
      </div>
    </div>
  );
};

export default StikyNote;
