import { createContext, useState } from "react";

export const CalcContext = createContext();

const CalcProvider = ({ children }) => {
  const [calc, setCalc] = useState({
    sign: "",
    num1: 0,
    num2: 0,
    res: 0,
  });

  return (
    <CalcContext.Provider
      value={{
        calc,
        setCalc,
      }}
    >
      {children}
    </CalcContext.Provider>
  );
};
export { CalcProvider };
export default CalcProvider;
