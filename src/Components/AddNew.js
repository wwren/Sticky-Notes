import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import "./AddNew.css";

const AddNew = ({ setNewSticker }) => {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [color, setColor] = useState("yellow");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || paragraph.trim() === "") {
      if (title.trim() === "") {
        setErrors((prev) => ({ ...prev, title: "Title cannot be empty" }));
      }

      if (paragraph.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          paragraph: "Paragraph cannot be empty",
        }));
      }
      return;
    }

    setNewSticker({
      title: title,
      paragraph: paragraph,
      color: color,
      createdOn: new Date().toISOString(),
    });

    // clear out form
    setTitle("");
    setParagraph("");
    setColor("yellow");
    setErrors({});
    document.querySelector("select").style.backgroundImage =
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VS1TxxN3M1GoOndTyfIGYYZJpf40Zv-hdg&usqp=CAU")';
  };

  useEffect(() => {
    if (errors) {
      setErrors({});
    }
  }, []);

  const handleColorChange = (e) => {
    setColor(e.target.value);

    let colorUrl;

    switch (e.target.value) {
      case "yellow":
        colorUrl =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VS1TxxN3M1GoOndTyfIGYYZJpf40Zv-hdg&usqp=CAU";
        break;
      case "blue":
        colorUrl =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivskSOJYjkn_Kw2ihKbb-WJfY42NtyxPF1g&usqp=CAU";
        break;
      case "green":
        colorUrl =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Libya_%281977%E2%80%932011%2C_3-2%29.svg/1200px-Flag_of_Libya_%281977%E2%80%932011%2C_3-2%29.svg.png";
        break;
      case "red":
        colorUrl =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0Yyk-zcQ9TvIHPONGsABnujbDVB3ghsHLQ&usqp=CAU";
        break;
    }

    document.querySelector("select").style.backgroundImage = `url(${colorUrl})`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Sticker</h2>
      <div className="form-group">
        <label for="title">Title</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors["title"] && (
          <div style={{ color: "red" }}>{errors["title"]}</div>
        )}
      </div>
      <br />
      <div className="form-group">
        <label for="details">Details</label>
        <textarea
          name="paragraph"
          value={paragraph}
          onChange={(e) => setParagraph(e.target.value)}
        />
        {errors["paragraph"] && (
          <div style={{ color: "red" }}>{errors["paragraph"]}</div>
        )}
      </div>
      <div className="form-group">
        <label for="color">Color</label>
        <select
          name="color"
          value={color}
          onChange={(e) => handleColorChange(e)}
        >
          <option value="yellow">Yellow</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
        </select>
      </div>
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
};

export default AddNew;
