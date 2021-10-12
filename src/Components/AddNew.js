import React, { useEffect, useState } from "react";
import "./AddNew.css";

const TITLE_ERROR = "Title cannot be empty";
const PARAGRAPH_ERROR = "Paragraph cannot be empty";
const AddNew = ({ setNewSticker, date }) => {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [color, setColor] = useState("yellow");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || paragraph.trim() === "") {
      if (title.trim() === "") {
        setErrors((prev) => ({ ...prev, title: TITLE_ERROR }));
      }

      if (paragraph.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          paragraph: PARAGRAPH_ERROR,
        }));
      }
      return;
    }

    setNewSticker({
      title: title,
      paragraph: paragraph,
      color: color,
      date: date?.toLocaleDateString() ?? new Date().toLocaleDateString(),
      datetime: date?.toISOString() ?? new Date().toISOString(),
    });

    // reset form
    setTitle("");
    setParagraph("");
    setColor("yellow");
    setErrors({});
    document.querySelector("select").style.backgroundImage =
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VS1TxxN3M1GoOndTyfIGYYZJpf40Zv-hdg&usqp=CAU")';
  };

  // useEffect(() => {
  //   if (errors) {
  //     setTimeout(() => {
  //       setErrors({});
  //     }, 5000);
  //   }
  // }, [errors]);

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

  const handleChange = (e) => {
    let tagName = e.target.getAttribute("name");
    if (tagName === "title") {
      if (e.target.value.trim()) {
        setErrors((prev) => ({ ...prev, title: "" }));
      } else {
        setErrors((prev) => ({ ...prev, title: TITLE_ERROR }));
      }
      setTitle(e.target.value);
    } else if (tagName === "paragraph") {
      if (e.target.value.trim()) {
        setErrors((prev) => ({
          ...prev,
          paragraph: "",
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          paragraph: PARAGRAPH_ERROR,
        }));
      }
      setParagraph(e.target.value);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Sticky Note</h2>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(e) => handleChange(e)}
        />
        {errors["title"] && (
          <div style={{ color: "red" }}>{errors["title"]}</div>
        )}
      </div>
      <br />
      <div className="form-group">
        <label htmlFor="details">Details</label>
        <textarea
          name="paragraph"
          value={paragraph}
          onChange={(e) => handleChange(e)}
        />
        {errors["paragraph"] && (
          <div style={{ color: "red" }}>{errors["paragraph"]}</div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="color">Color</label>
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
