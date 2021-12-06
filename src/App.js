import { useState, useEffect } from "react";
import StikyNote from "./Components/StickyNote";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Overlay from "./Components/Overlay";
import MyCalender from "./Components/Calender";
import AddNew from "./Components/AddNew";
import { getOnDate } from "./APIs.js";

function App() {
  const [showCalender, setShowCalender] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [newSticker, setNewSticker] = useState(undefined);
  const [stickers, setStickers] = useState([]);

  // on page load, get all stickers
  useEffect(() => {
    async function fetchAllNotes() {
      const allNotes = await getOnDate("*");
      setStickers(allNotes);
    }
    fetchAllNotes();
  }, []);

  // on selectedDate change, get stickers from selected date
  useEffect(() => {
    async function fetchNotesOnDate() {
      if (selectedDate) {
        const date = selectedDate.toLocaleDateString();
        const notesOnDate = await getOnDate(date);
        setStickers(notesOnDate);

        console.log(`Notes on ${selectedDate}`, notesOnDate);
      }
    }
    fetchNotesOnDate();
  }, [selectedDate]);

  useEffect(() => {
    console.log("stickers", stickers);
  }, [stickers]);

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
  }, [newSticker, stickers]);

  return (
    <>
      {showCalender && (
        <Overlay setShowModel={setShowCalender}>
          <MyCalender
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </Overlay>
      )}
      {showNew && (
        <Overlay showModel={showNew} setShowModel={setShowNew}>
          <AddNew setNewSticker={setNewSticker} date={selectedDate} />
        </Overlay>
      )}
      <Nav setShowCalender={setShowCalender} setShowNew={setShowNew} />
      <ul className="sticky_notes">
        {stickers.length > 0 &&
          stickers.map((sticker) => (
            <li key={sticker.id ?? sticker.datetime}>
              <StikyNote props={sticker} setStickers={setStickers} />
            </li>
          ))}
      </ul>
      <Footer />
    </>
  );
}

export default App;
