import React, { useState, useEffect } from "react";
import Calender from "react-calendar";
import "./Calender.css";

const MyCalender = () => {
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    console.log("value", value);
  }, [value]);

  return (
    <div>
      <Calender onChange={onChange} value={value} />
    </div>
  );
};

export default MyCalender;
