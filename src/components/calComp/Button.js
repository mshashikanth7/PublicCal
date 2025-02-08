import "./Button.css";
import { useContext } from "react";
import { CalcContext } from "../../context/CalcContext";

const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };
  return className[btn] || "";
};

const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  const commaClick = () => {
    setCalc({
      ...calc,
      num1:
        calc.sign === ""
          ? !calc.num1.toString().includes(".")
            ? calc.num1 + value
            : calc.num1
          : calc.num1,
      num2:
        calc.sign !== ""
          ? !calc.num2.toString().includes(".")
            ? calc.num2 + value
            : calc.num2
          : calc.num2,
    });
    //console.log(calc);
  };

  const resetClickHandler = () => {
    setCalc({
      sign: "",
      num1: 0,
      num2: 0,
      res: 0,
    });
    //console.log(calc);
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num1: calc.sign === "" ? calc.num1 * -1 : calc.num1,
      num2: calc.sign !== "" ? calc.num2 * -1 : calc.num2,
    });
    //console.log(calc);
  };

  const percentClickHandler = () => {
    setCalc({
      ...calc,
      res:
        calc.num1 === 0 && calc.num2 === 0
          ? (calc.res = calc.res / 100)
          : calc.sign === ""
          ? calc.num1 / 100
          : calc.num2 / 100,
      num1: 0,
      num2: 0,
    });
    //console.log(calc);
  };
  function truncateToDecimals(num, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.trunc(num * factor) / factor;
  }

  const equalsClickHandler = () => {
    const math = (a, b, sign) => {
      const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        x: (a, b) => a * b,
        "/": (a, b) => a / b,
      };
      return Math.round(operations[sign](a, b) * 1000000) / 1000000;
    };

    setCalc({
      res: math(Number(calc.num1), Number(calc.num2), calc.sign),
      sign: "",
      num1: 0,
      num2: 0,
    });

    //console.log(calc);
  };

  const signClickHandler = () => {
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

    //console.log(calc);
  };

  const numClickHandler = () => {
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

  const Onclick = () => {
    const btn = value;
    if (btn === "C") resetClickHandler();
    else if (btn === "+-") invertClickHandler();
    else if (btn === "%") percentClickHandler();
    else if (btn === "=") equalsClickHandler();
    else if (["/", "x", "-", "+"].includes(btn)) signClickHandler();
    else if (btn === ".") commaClick();
    else numClickHandler();
  };

  return (
    <button className={`${getStyleName(value)} button`} onClick={Onclick}>
      {value}
    </button>
  );
};

export default Button;
