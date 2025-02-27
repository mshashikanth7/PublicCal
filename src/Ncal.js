import Wrapper from "./components/calComp/Wrapper";
import Screen from "./components/calComp/Screen";
import ButtonBox from "./components/calComp/ButtonBox";
import Button from "./components/calComp/Button";

import { CalcContext } from "./context/CalcContext";
import { useContext, useEffect } from "react";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function Ncal({ disableKeys = false }) {
  const { calc, setCalc } = useContext(CalcContext);

  useEffect(() => {
    if (disableKeys) return; // Do nothing if disableKeys is true

    const deleteLastCharacter = () => {
      if (calc.sign !== "" && calc.num2 === "") {
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

    const keyD = (event) => {
      if (event.key === "Shift") return;

      switch (event.key) {
        case "Backspace":
          deleteLastCharacter();
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
          signPressHandler(event.key);
          break;
        case ".":
          commaPressHandler(event.key);
          break;
        default:
          if (!isNaN(event.key)) {
            numPressHandler(event.key);
          }
      }
    };
    document.addEventListener("keydown", keyD);
    return () => {
      document.removeEventListener("keydown", keyD);
    };
  }, [calc, setCalc, disableKeys]);

  return (
    <>
      <Wrapper>
        <Screen></Screen>
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button value={btn} key={i} />
          ))}
        </ButtonBox>
      </Wrapper>
    </>
  );
}

export default Ncal;
