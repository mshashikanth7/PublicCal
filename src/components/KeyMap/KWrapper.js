import "./KWrapper.css";
import React from "react";

const Twrapper = ({ children }) => {
  return (
    <div className="">
      <div className="row Kouter justify-content-center">
        <div className="Kwrapper col-4">{children}</div>
      </div>
    </div>
  );
};

export default Twrapper;
