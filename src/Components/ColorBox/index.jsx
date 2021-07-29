import React, { useState } from "react";
import './ColorBox.scss'

ColorBox.propTypes = {};

function getRandomColor() {
  const COLOR_LIST = ["green", "red", "deeppink", "yellow", "black"];
  const index = Math.trunc(Math.random() * 5);
  return COLOR_LIST[index];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("color_box") || "deeppink";
    console.log(initColor);
    return initColor;
  });

  const handleClickBox = () => {
    const colorNew = getRandomColor();
    setColor(colorNew);
    localStorage.setItem("color_box", colorNew);
  };
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleClickBox}
    >
     
    </div>
  );
}

export default ColorBox;
