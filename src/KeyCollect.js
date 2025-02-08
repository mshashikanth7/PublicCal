import React, { useState, useEffect, useContext } from "react";
import KWrapper from "./components/KeyMap/KWrapper";
import KButton from "./components/KeyMap/KButton";
import KButtonBox from "./components/KeyMap/KButtonBox";
import { KeyContext } from "./context/KeyContext";
import RadioButtonGroup from "./components/KeyMap/RadioButtonGroup";
import { CalcContext } from "./context/CalcContext";

import Twrapper from "./components/KeyMap/KWrapper";
import Screen from "./components/TransFormer/TScreen";
import ButtonBox from "./components/KeyMap/KButtonBox";
import TButton from "./components/TransFormer/TButton";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

// const btnValues = [
//   ["C", "/", "x", "-"],
//   [7, 8, 9, "+-"],
//   [4, 5, 6, "+"],
//   [1, 2, 3, "="],
//   [0, ".", "="],
// ];

function KeyCollect() {
  const { calc, setCalc } = useContext(CalcContext);
  const [da, setDa] = useState({});
  const [img, setImg] = useState("");
  const { mapKeys, setMapKeys } = useContext(KeyContext);
  useEffect(() => {
    ////console.log("Received mapKeys in Tcal:", mapKeys);
  }, [mapKeys]);
  const [flag, setFlag] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = Array.from(document.querySelectorAll(".KI"))
      .filter((input) => input.value)
      .reduce((acc, input) => {
        if (input.value === "Space") {
          acc[input.id] = " ";
        } else {
          acc[input.id] = input.value;
        }

        ////console.log(input.id, input.value);
        return acc;
      }, {});
    // const inputs = Array.from(document.querySelectorAll(".KI"))
    //   .filter((input) => input.value)
    //   .reduce((acc, input) => {
    //     acc.set(input.id, new Map([["value", input.value]]));
    //     return acc;
    //   }, new Map());

    // ////console.log(inputs.get("someId").get("value")); // Retrieve the value
    // //console.log(inputs);

    setDa(inputs); // Completely replace `da` with new inputs
    //console.log(mapKeys);

    setMapKeys(inputs);
    setCalc({
      sign: "",
      num1: 0,
      num2: 0,
      res: 0,
    });
    //console.log(mapKeys);
    if (Object.keys(inputs).length !== 19) {
      setFlag(false);
    }
  };

  const handleOptionChange = (option) => {
    //console.log(`Selected option in parent: ${option}`);
    if (option === "LeftHand") {
      setImg("a");
      const newDa = {
        0: "0",
        1: "1",
        2: "2",
        3: "a",
        4: "4",
        a: "5",
        6: "6",
        7: "a",
        8: "8",
        9: "9",
        "%": "%",
        "+": "+",
        "+-": "+-",
        "-": "-",
        ".": ".",
        "/": "/",
        "=": "=",
        C: "C",
        x: "x",
      };
      const truL = {
        0: "Shift",
        1: "z",
        2: "x",
        3: "c",
        4: "a",
        5: "s",
        6: "d",
        7: "q",
        8: "w",
        9: "e",
        "%": "3",
        "+": "v",
        "+-": "2",
        "-": "f",
        ".": "Alt",
        "/": "4",
        "=": " ",
        C: "1",
        x: "r",

        // Additional direct mappings
      };
      const truR = {
        0: " ",
        1: "n",
        2: "m",
        3: ",",
        4: "h",
        5: "j",
        6: "k",
        7: "y",
        8: "u",
        9: "i",
        "+": "l",
        "+-": "o",
        "-": "9",
        ".": "Meta",
        "/": "7",
        "=": ".",
        C: "6",
        x: "8",
      };
      //console.log(truL);
      // setDa(newDa); // Completely replace with LeftHand mapping
      // setMapKeys(newDa);
      setDa(truL);
      setMapKeys(truL);
    }
    if (option === "RightHand") {
      const truR = {
        0: " ",
        1: "n",
        2: "m",
        3: ",",
        4: "h",
        5: "j",
        6: "k",
        7: "y",
        8: "u",
        9: "i",
        "+": "l",
        "+-": "o",
        "-": "9",
        ".": "Meta",
        "/": "7",
        "=": ".",
        C: "6",
        x: "8",
      };
      const wTruR = {
        0: " ",
        1: "m",
        2: ",",
        3: ".",
        4: "j",
        5: "k",
        6: "l",
        7: "u",
        8: "i",
        9: "o",
        "%": "9",
        "+": "/",
        "+-": "8",
        "-": ";",
        ".": "Alt",
        "/": "0",
        "=": "Shift",
        C: "7",
        x: "p",
      };
      setDa(truR);
      setMapKeys(wTruR);
    }
    if (option === "Custom") {
      const scrollToHalf = () => {
        // Calculate the halfway point of the page
        const halfPage = document.body.scrollHeight / 3;
        // Scroll to the halfway point
        window.scrollTo({
          top: halfPage,
          behavior: "smooth", // This makes the scroll smooth
        });
      };
      scrollToHalf();
      return;
    }
  };

  return (
    <>
      <RadioButtonGroup onOptionChange={handleOptionChange} />

      <KWrapper>
        <form onSubmit={handleSubmit}>
          {flag ? (
            <div className="alert alert-primary fs-2">
              <p className="text-center ">Enter all the keys to be mapped</p>
            </div>
          ) : (
            <div className="alert alert-danger fs-2">
              <p className="text-center">Some keys are missing</p>
            </div>
          )}
          <KButtonBox>
            {btnValues.flat().map((btn) => (
              <KButton key={btn} value={btn} id={btn} />
            ))}
            <button className="Kbutton sub justify-content-center " disabled>
              avoid duplicate keys and Backspace is not mappable
            </button>
            <button
              className="Kbutton sub justify-content-center"
              style={{ backgroundColor: "rgba(0,193,34)" }}
            >
              {" "}
              Submit
            </button>
          </KButtonBox>
        </form>
      </KWrapper>
    </>
  );
}

export default KeyCollect;
