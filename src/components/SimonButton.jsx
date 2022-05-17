import React, { useState } from "react";
import { Howl } from "howler";

function SimonButton(props) {
  const { pitch, btnText, btnColor } = props;

  const soundA = new Howl({
    src: ["https://cdn.freesound.org/previews/26/26227_176346-lq.mp3"],
    preload: true,
    rate: pitch,
  });

  return (
    <>
      <button
        className={`simon-button ${btnColor}`}
        onClick={(e) => {
          e.preventDefault();
          soundA.play();
          e.target.className = `simon-button ${btnColor} glow`;
          setTimeout(() => {
            e.target.className = `simon-button ${btnColor}`;
          }, 250);
        }}
      >
        {btnText}
      </button>
    </>
  );
}

export default SimonButton;
