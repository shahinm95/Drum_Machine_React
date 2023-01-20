import React, { useState } from "react";
import "./styles.css";

export default function DrumMachine() {
  const [bank, bankSetter] = useState(true);
  const [power, powerSetter] = useState(true);
  const [volume, volumeSetter] = useState(30);
  const [display, displaySetter] = useState("");
  function rangeHandler(value) {
    displaySetter("The Volume is : " + value.target.value);
    volumeSetter(value.target.value);
    setTimeout(() => displaySetter(""), 800);
  }
  function bankSelectHandler() {
    bankSetter(!bank);
  }
  function powerHandler() {
    powerSetter(!power);
  }
  let bankClass;
  let bankArr;
  let powerClass;
  if (bank === true) {
    bankClass = "float-left";
    bankArr = bank1;
  } else if (bank === false) {
    bankClass = "float-right";
    bankArr = bank2;
  }

  if (power === true) {
    powerClass = "float-left";
  } else if (power === false) {
    powerClass = "float-right";
  }
  window.addEventListener("keydown", (event) => {
    const pad = bankArr.find((item) => item.id === event.key.toUpperCase());
    if (pad) {
      document.getElementById(pad.name).click();
    }
  });

  let padBank = bankArr.map((data) => {
    let srcAdd;
    if (power === true) {
      srcAdd = data.src;
    } else {
      srcAdd = "#";
    }
    let audio = new Audio(srcAdd);
    audio.volume = volume / 100;
    const start = () => {
      if (power) {
        audio.play();
        displaySetter(data.name);
      }
    };
    return (
      <div key={data.name} className="drum-pad" id={data.name} onClick={start}>
        <audio src={srcAdd} className="clip" id={data.id}></audio>
        {data.id}
      </div>
    );
  });

  return (
    <div className="root">
      <div id="drum-machine">
        <div className="pad-bank">{padBank}</div>
        <div className="controls-container">
          <div className="control">
            <p>Power</p>
            <div className="select">
              <div
                onClick={powerHandler}
                className={`inner ${powerClass}`}
              ></div>
            </div>
          </div>
          <div id="display">
            <p>{display}</p>
          </div>
          <div className="volume-slider">
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              step="10"
              onChange={rangeHandler}
            ></input>
          </div>
          <div className="control">
            <p>Bank</p>
            <div className="select">
              <div
                onClick={bankSelectHandler}
                className={`inner ${bankClass}`}
              ></div>
            </div>
          </div>
        </div>
        <div className="logo">SHA</div>
      </div>
    </div>
  );
}

const bank1 = [
  {
    name: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    id: "Q"
  },
  {
    name: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    id: "W"
  },
  {
    name: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    id: "E"
  },
  {
    name: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    id: "A"
  },
  {
    name: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    id: "S"
  },
  {
    name: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    id: "D"
  },
  {
    name: "Kick-n-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    id: "Z"
  },
  {
    name: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    id: "X"
  },
  {
    name: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    id: "C"
  }
];

const bank2 = [
  {
    name: "Chord-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    id: "Q"
  },
  {
    name: "Chord-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    id: "W"
  },
  {
    name: "Chord-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    id: "E"
  },
  {
    name: "Shaker",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    id: "A"
  },
  {
    name: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    id: "S"
  },
  {
    name: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    id: "D"
  },
  {
    name: "Punchy-Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    id: "Z"
  },
  {
    name: "Side-Stick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    id: "X"
  },
  {
    name: "Snare",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    id: "C"
  }
];
