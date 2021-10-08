import { useState, useEffect } from "react";
import StikyNote from "./Components/StickyNote";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Overlay from "./Components/Overlay";
import MyCalender from "./Components/Calender";
import AddNew from "./Components/AddNew";

function App() {
  const [showCalender, setShowCalender] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [newSticker, setNewSticker] = useState(undefined);
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  useEffect(() => {
    console.log("selectedDate", selectedDate);
  }, [selectedDate]);

  useEffect(() => {
    if (showCalender || showNew) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowX = "hidden";
      document.querySelector("body").style.overflowY = "auto";
    }
  }, [showCalender, showNew]);

  useEffect(() => {
    if (newSticker !== undefined) {
      console.log("newSticker", newSticker);

      const newStickers = [...stickers, newSticker];

      setStickers(newStickers);
      setNewSticker(undefined);

      console.log("stickers", stickers);
    }
  }, [newSticker]);

  return (
    <>
      <Overlay showModel={showCalender} setShowModel={setShowCalender}>
        <MyCalender
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </Overlay>
      <Overlay showModel={showNew} setShowModel={setShowNew}>
        <AddNew setNewSticker={setNewSticker} />
      </Overlay>
      <Nav setShowCalender={setShowCalender} setShowNew={setShowNew} />
      <ul className="sticky_notes">
        {stickers.length > 0 &&
          stickers.map((sticker) => (
            <li key={sticker.createdOn}>
              <StikyNote
                title={sticker.title}
                paragraph={sticker.paragraph}
                color={sticker.color}
              />
            </li>
          ))}
      </ul>
      <Footer />
    </>
  );
}

export default App;
