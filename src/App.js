import React from "react";
import "./App.css";
import Bord from "./components/Bord";
import Heading from "./components/Heading";
import MiniCard from "./components/MiniCard";

function App() {
  return (
    <div className="playground">
     {/* <Heading/> */}
      <Bord/>
      <MiniCard/>
    </div>
  );
}

export default App;
