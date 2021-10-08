import { useState, useEffect } from "react";
import StikyNote from "./Components/StickyNote";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Overlay from "./Components/Overlay";
import MyCalender from "./Components/Calender";

function App() {
  const [showCalender, setShowCalender] = useState(false);
  const [showNew, setShowNew] = useState(false);

  useEffect(() => {
    if (showCalender || showNew) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowX = "hidden";
      document.querySelector("body").style.overflowY = "auto";
    }
  }, [showCalender, showNew]);

  return (
    <>
      <Overlay showModel={showCalender} setShowModel={setShowCalender}>
        <MyCalender />
      </Overlay>
      <Overlay showModel={showNew} setShowModel={setShowNew}></Overlay>
      <Nav setShowCalender={setShowCalender} setShowNew={setShowNew} />
      <ul className="sticky_notes">
        <StikyNote
          title="Hello World 1"
          paragraph="Want to become a better web dev"
        />
        <StikyNote
          title="Hello World 2"
          paragraph="Want to become a better web dev"
        />
        <StikyNote
          title="Hello World 3"
          paragraph="Want to become a better web dev"
        />
        <StikyNote
          title="Hello World 3"
          paragraph="Want to become a better web dev"
        />
      </ul>
      <Footer />
    </>
  );
}

export default App;
