import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <p className="txt">
      {props.items}
      </p>
    </div>
  );
}

export default Card;
