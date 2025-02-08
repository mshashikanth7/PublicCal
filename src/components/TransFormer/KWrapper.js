import "./KWrapper.css";
import React from "react";
// import { KeyProvider } from "../../context/keyContext";

const Twrapper = ({ children }) => {
  return (
    <div className="">
      {/* <KeyProvider> */}
      <div className="row Kouter justify-content-center">
        <div className="Kwrapper col-4">{children}</div>
      </div>
      {/* </KeyProvider> */}
    </div>
  );
};

export default Twrapper;
