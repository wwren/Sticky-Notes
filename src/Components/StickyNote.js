import React, { useState } from "react";
import "./StickyNote.css";
import { putNewSticker, deleteSticker } from "../APIs.js";
import { useAlert } from "react-alert";

const StikyNote = ({ props, setStickers }) => {
  const { title, paragraph, color, date, datetime, id } = props;
  const [stickerMessage, setStickerMessage] = useState(undefined);

  const alert = useAlert();

  const handleSave = async (e) => {
    const stickerCopy = { ...props };
    const res = await putNewSticker(stickerCopy);
    if (res.success) {
      alert.show("Added to Memory!", { type: "success" });
      setStickers((prev) =>
        prev.map((ele) =>
          ele.id === undefined && ele.datetime === res.data.datetime
            ? { ...ele, id: res.data.id }
            : ele
        )
      );
    } else {
      alert.show("Error! Try Again!", { type: "error" });
    }
  };

  const handleDelete = async () => {
    // delete from database and state
    if (id) {
      setStickers((prev) => prev.filter((ele) => ele.id !== id));
      const res = await deleteSticker(id);
      if (res.success) {
        alert.show("Permanently Gone!", { type: "info" });
      } else {
        alert.show("Error! Try Again!", { type: "error" });
      }
    } else {
      alert.show("Gone from Board!", { type: "info" });
      setStickers((prev) => prev.filter((ele) => ele.datetime !== datetime));
    }
  };

  const handleInput = (e) => {
    let stickerId = e.target.parentElement.getAttribute("id");
    let tagName = e.target.tagName;
    let data = e.target.innerText;

    let message = { stickerId, tagName, data };

    setStickerMessage(message);
  };

  const handleBlur = (e) => {
    if (stickerMessage) {
      setStickers((prev) =>
        prev.map((ele) =>
          ele.id === stickerMessage.stickerId ||
          ele.datetime === stickerMessage.stickerId
            ? stickerMessage.tagName === "H2"
              ? { ...ele, title: stickerMessage.data }
              : { ...ele, paragraph: stickerMessage.data }
            : ele
        )
      );
    }
  };

  return (
    <a className={`sticky_note ${color}`} id={id ?? datetime}>
      <h2
        contentEditable="true"
        onInput={(e) => handleInput(e)}
        onBlur={(e) => handleBlur(e)}
        suppressContentEditableWarning={true}
      >
        {title}
      </h2>
      <p
        contentEditable="true"
        onInput={(e) => handleInput(e)}
        onBlur={(e) => handleBlur(e)}
        suppressContentEditableWarning={true}
      >
        {paragraph}
      </p>
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
    </a>
  );
};

export default StikyNote;
