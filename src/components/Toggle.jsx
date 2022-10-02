import React from "react";
import { useState } from "react";
export const Toggle = () => {
  const [bulb, setBulb] = useState("bulbgreen");
  return (
    <div className="proditem">
      {/* <div className="bulbred"></div> */}
      <div className={bulb}></div>
      <button onClick={() => setBulb("bulbred")}>red</button>
      <button onClick={() => setBulb("bulbgreen")}>green</button>
    </div>
  );
};
