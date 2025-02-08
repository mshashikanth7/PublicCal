// import { createContext, useState, useEffect, React } from "react";

// export const KeyContext = createContext();

// const KeyProvider = ({ children }) => {
//   const [mapKeys, setMapKeys] = useState({});
//   const [activeHandler, setActiveHandler] = useState(null);
//   const instanceId = React.useRef(Date.now()); // Unique ID for this instance

//   useEffect(() => {
//     console.log("KeyProvider instance created:", instanceId.current);
//     return () =>
//       console.log("KeyProvider instance destroyed:", instanceId.current);
//   }, []);
//   // Add debug logs
//   useEffect(() => {
//     console.log("KeyProvider mapKeys changed:", mapKeys);
//   }, [mapKeys]);

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (activeHandler) {
//         activeHandler(event);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [activeHandler]);

//   return (
//     <KeyContext.Provider
//       value={{
//         mapKeys,
//         setMapKeys,
//         setActiveHandler, // Expose this so components can register their handlers
//       }}
//     >
//       {children}
//     </KeyContext.Provider>
//   );
// };
// export { KeyProvider };
// export default KeyProvider;
import { createContext, useState } from "react";

export const KeyContext = createContext();

const KeyProvider = ({ children }) => {
  const [mapKeys, setMapKeys] = useState({});
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <KeyContext.Provider
      value={{ mapKeys, setMapKeys, selectedOption, setSelectedOption }}
    >
      {children}
    </KeyContext.Provider>
  );
};
export { KeyProvider };
export default KeyProvider;
