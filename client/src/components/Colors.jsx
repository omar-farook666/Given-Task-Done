import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Colors({ colors }) {
  const [curColor, setCurColor] = useState("");
  return (
    <div className="colors" style={{ color: "#B9BBBF" }}>
      <p>Choose a color</p>
      {colors?.map((item, index) => {
        return (
          <button
            className={item === curColor ? "btn-style active" : "btn-style"}
            style={{ background: item }}
            key={index}
            onClick={() => setCurColor(item)}
          >
            {console.log(curColor)}
            {item === curColor ? <FontAwesomeIcon icon={faCheck} /> : null}
          </button>
        );
      })}
    </div>
  );
}

export default Colors;
