import React from "react";
import Calender from "react-calendar";
import "./Calender.css";

const MyCalender = ({ selectedDate, setSelectedDate }) => {
  return (
    <div>
      <Calender
        onChange={setSelectedDate}
        value={selectedDate}
        maxDate={new Date()}
      />
    </div>
  );
};

export default MyCalender;
