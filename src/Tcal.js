import Screen from "./components/TransFormer/TScreen";
import ButtonBox from "./components/TransFormer/TButtonBox";
import TButton from "./components/TransFormer/TButton";
import CalcProvider from "./context/CalcContext";
import Twrapper from "./components/TransFormer/Twrapper";
import { CalcContext } from "./context/CalcContext";
import { KeyContext } from "./context/KeyContext";
import { useContext, useEffect, useState } from "react";
import left from "./components/assets/img/left.png";
import right from "./components/assets/img/right.png";
import { useLocation } from "react-router-dom";
import KeyCollect from "./KeyCollect";
import Dw from "./components/TransFormer/Dw";

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

const Tcal = () => {
  const { calc, setCalc } = useContext(CalcContext);
  const { setMapKeys, mapKeys } = useContext(KeyContext);
  const { selectedOption, setSelectedOption } = useContext(KeyContext);
  // useEffect(() => {
  //   //console.log("Received mapKeys in Tcal:", mapKeys);
  // }, [mapKeys]);
  // const { setActiveHandler } = useContext(KeyContext);
  // useEffect(() => {
  //   //console.log("Tcal mounted with mapKeys:", mapKeys);
  //   //console.log("Tcal mounted with calc:", calc);

  //   return () => {
  //     //console.log("Tcal unmounting");
  //   };
  // }, []);

  // useEffect(() => {
  //   // Register this component's keyD handler
  //   setActiveHandler(() => keyD);

  //   // Cleanup when component unmounts
  //   return () => setActiveHandler(null);
  // }, [calc, setCalc, mapKeys]);

  useEffect(() => {
    window.addEventListener("keydown", keyD);
    //console.log();
    return () => {
      window.removeEventListener("keydown", keyD);
    };
  }, [calc, setCalc, mapKeys]);
  //To Do :Sticky Keys Problem

  const keyD = (event) => {
    //code to fixed space issue
    event.preventDefault();
    //console.log("form the Tcal", mapKeys);
    //console.log("recived key", event.key);
    //console.log("recived key code", event.code);

    const b = event.key;

    //console.log("pressed key value:", b);

    function findKeyByValue(mapKeys, value) {
      // clog the mapKeys and the value
      //console.log("Searching for value:", value);
      //console.log("Current mapKeys:", mapKeys);

      return (
        Object.entries(mapKeys).find(([key, val]) => val === value)?.[0] || null
      );
    }

    //console.log("deliverd value", b);

    if (b === "Meta") {
      var a = findKeyByValue(mapKeys, "Alt")
        ? findKeyByValue(mapKeys, "Alt")
        : findKeyByValue(mapKeys, "Meta");
    } else if (b === "Backspace") {
      deleteLastCharacter();
    } else {
      var a = findKeyByValue(mapKeys, b);
    }
    //console.log("found value", a);

    // if (event.key === "Shift") return;

    switch (a) {
      case "C":
        resetPressHandler();
        break;
      case "+-":
        invertPressHandler();
        break;
      case "%":
        percentPressHandler();
        break;
      case "=":
        equalsPressHandler();
        break;
      case "/":
      case "x":
      case "-":
      case "+":
        signPressHandler(a);
        break;
      case ".":
        commaPressHandler(a);
        break;
      default:
        if (!isNaN(a)) {
          numPressHandler(a);
        }
    }
  };

  const numPressHandler = (e) => {
    const value = Number(e);

    if (isNaN(value)) return;

    const numberString = value.toString();
    setCalc({
      ...calc,
      num1:
        calc.sign === ""
          ? calc.num1 === 0
            ? numberString
            : calc.num1 + numberString
          : calc.num1,
      num2:
        calc.sign !== ""
          ? calc.num2 === 0
            ? numberString
            : calc.num2 + numberString
          : calc.num2,
    });
  };

  const commaPressHandler = (e) => {
    const value = e;

    setCalc({
      ...calc,
      num1:
        calc.sign === "" && !calc.num1.toString().includes(".")
          ? calc.num1 + value
          : calc.num1,
      num2:
        calc.sign !== "" && !calc.num2.toString().includes(".")
          ? calc.num2 + value
          : calc.num2,
    });
  };

  const signPressHandler = (e) => {
    const value = e;
    if (calc.res === 0 || calc.num1 !== 0) {
      setCalc({
        ...calc,
        sign: value,
        res: 0,
      });
    } else {
      setCalc({
        ...calc,
        num1: calc.res,
        sign: value,
        res: 0,
      });
    }
  };

  function truncateToDecimals(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.trunc(num * factor) / factor;
  }

  const deleteLastCharacter = () => {
    try {
      if (calc.res) {
        return;
      } else if (calc.sign !== "" && calc.num2 === "") {
        setCalc({
          ...calc,
          sign: "",
        });
      } else {
        setCalc({
          ...calc,

          num1: calc.sign === "" ? calc.num1.slice(0, -1) : calc.num1,
          num2: calc.sign !== "" ? calc.num2.slice(0, -1) : calc.num2,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const equalsPressHandler = () => {
    const math = (a, b, sign) => {
      const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        x: (a, b) => a * b,
        "/": (a, b) => (b !== 0 ? a / b : "Error"),
      };

      return operations[sign]
        ? Math.round(operations[sign](a, b) * 1000000) / 1000000
        : "Error";
    };

    if (!calc.sign || calc.num1 === "" || calc.num2 === "") {
      return;
    }

    const result = math(Number(calc.num1), Number(calc.num2), calc.sign);

    setCalc({
      res: result,
      sign: "",
      num1: 0,
      num2: 0,
    });
  };

  const invertPressHandler = () => {
    setCalc({
      ...calc,
      num1: calc.sign === "" && calc.num1 !== 0 ? calc.num1 * -1 : calc.num1,
      num2: calc.sign !== "" && calc.num2 !== 0 ? calc.num2 * -1 : calc.num2,
    });
  };

  const percentPressHandler = () => {
    setCalc({
      ...calc,
      res:
        calc.num1 === 0 && calc.num2 === 0
          ? calc.res / 100
          : calc.sign === ""
          ? calc.num1 / 100
          : calc.num2 / 100,
      num1: 0,
      num2: 0,
    });
  };

  const resetPressHandler = () => {
    setCalc({
      sign: "",
      num1: 0,
      num2: 0,
      res: 0,
    });
  };
  return (
    <div>
      <div tabIndex={0} className="row ">
        <div className="col-12  col-md-6 justify-content-center">
          <Twrapper>
            <Screen></Screen>
            <ButtonBox>
              {btnValues.flat().map((btn, i) => (
                <TButton value={btn} key={i} />
              ))}
            </ButtonBox>
          </Twrapper>
        </div>
        <div className="col-12  col-md-6 ">
          <Dw>
            {selectedOption && (
              <div
                className="d-flex justify-content-center mt-3"
                style={{ height: "auto", width: "auto" }}
              >
                {selectedOption === "LeftHand" && (
                  <img
                    src={left}
                    style={{
                      height: "500px",
                      margin: "0px",
                      padding: "0px",
                      display: "block",
                      borderRadius: "20px", // Smooth corners
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow for depth
                      backgroundColor: "rgba(255, 255, 255, 0.5)", // Slight transparency for smooth blending
                    }}
                    alt="Left Hand"
                  />
                )}
                {selectedOption === "RightHand" && (
                  <img
                    src={right}
                    style={{
                      height: "auto",
                      margin: "0px",
                      padding: "0px",
                      display: "block",
                      borderRadius: "20px", // Smooth corners
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow for depth
                      backgroundColor: "rgba(255, 255, 255, 0.5)", // Slight transparency for smooth blending
                    }}
                    alt="Left Hand"
                  />
                )}
                {selectedOption === "Custom" && (
                  <div className="container mt-3">
                    <h2 style={{ color: "white" }}>Mapping Table</h2>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Button</th>
                          <th>mapped To Key</th>
                          <th>Button</th>
                          <th>mapped To Key</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(mapKeys)
                          .reduce((rows, [key, value], index) => {
                            // Create a new row every 2 entries (4 columns)
                            if (index % 2 === 0) {
                              rows.push([key, value]); // Start a new row
                            } else {
                              rows[rows.length - 1].push(key, value); // Add to the last row
                            }
                            return rows;
                          }, [])
                          .map((row, index) => (
                            <tr key={index}>
                              <td>{row[0]}</td>
                              <td>
                                {typeof row[1] === "object"
                                  ? JSON.stringify(row[1])
                                  : row[1]}
                              </td>
                              <td>{row[2] || ""}</td>
                              <td>
                                {typeof row[3] === "object"
                                  ? JSON.stringify(row[3])
                                  : row[3] || ""}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </Dw>
        </div>
        <KeyCollect />
      </div>
    </div>
  );
};
export default Tcal;
