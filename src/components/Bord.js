import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Board.css";
import Heading from "./Heading";

const Bord = () => {
  const defaultBoard = ["Proklamasi Kemerdekaan", "Perjanjian Renvile", "Agresi Militer Belanda II", "Bandung Lautan Api", "Konferensi Meja Bundar", "Kabinet Natsir"];
  const [values] = useState(defaultBoard);
  
  return (
    <div className="Board">
      {values.map((val) => (
        <span>
          <Card items={val} />
        </span>
      ))}
    </div>
  );
};

export default Bord;
