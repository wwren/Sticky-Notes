import { useState, useEffect } from "react";
import StikyNote from "./Components/StickyNote";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Overlay from "./Components/Overlay";

function App() {
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (showModel) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowX = "hidden";
      document.querySelector("body").style.overflowY = "auto";
    }
  }, [showModel]);

  return (
    <>
      <Overlay showModel={showModel} setShowModel={setShowModel}></Overlay>
      <Nav setShowModel={setShowModel} />
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
