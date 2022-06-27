import React, { useState, useEffect } from "react";
import "./MiniCard.css";
import { Card, Typography } from "@material-ui/core";
import Draggable from "react-draggable";

const MiniCard = () => {
  const tahun = ["1950","1949","1948","1947","1946","1945"];
  const [values] = useState(tahun);


  return (
    <div className="minicard">
      {values.map((val) => (
      <span>
        <DraggableCard year={val} bgColor="#FFBB0A"/>
      </span>
    ))}
    </div>
  );
};

/**
 * Material-UI Card that you can drag and drop anywhere.
 */
const DraggableCard = ({ year, bgColor }) => {
  return (
    <Draggable>
      <Card className="txtcard"
        style={{padding: "3px", width: "100px", backgroundColor: bgColor, color: "#7A1FA0", margin:"8px" }}
      >
        <Typography variant="h6">{year}</Typography>
      </Card>
    </Draggable>
  );
};

/**
 * Material-UI Button in a Card. You can drag and drop the button
 * anywhere within the card.
 */
const DraggableButtonInCard = ({ year, bgColor }) => {
  return (
    <Card style={{ width: "40%", backgroundColor: bgColor, color: "#ffffff" }}>
      <Draggable>
      </Draggable>
      <Typography variant="h6">{year}</Typography>
    </Card>
  );
};


export default MiniCard;
