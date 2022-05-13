import React from "react";
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
        onClick={() => soundA.play()}
      >
        {btnText}
      </button>
    </>
  );
}

export default SimonButton;
