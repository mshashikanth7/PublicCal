import { useContext, useEffect } from "react";
import { CalcContext } from "../../context/CalcContext";

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <div className="screen">
      <div className="txt">
        {calc.sign === "" && calc.res === 0
          ? calc.num1 + "_" + calc.num2
          : calc.num1 + calc.sign + calc.num2 + "=" + calc.res}
      </div>
    </div>
  );
};

export default Screen;
