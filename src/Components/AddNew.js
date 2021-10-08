import React from "react";
import { useState } from "react/cjs/react.development";
import "./AddNew.css";

const AddNew = ({ setNewSticker }) => {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewSticker({
      title: title,
      paragraph: paragraph,
      createdOn: new Date().toISOString(),
    });

    // clear out form
    setTitle("");
    setParagraph("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Sticker</h2>
      <div className="form-group">
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br />
      <div className="form-group">
        <label>Details</label>
        <textarea
          name="paragraph"
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
      </div>
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddNew;
