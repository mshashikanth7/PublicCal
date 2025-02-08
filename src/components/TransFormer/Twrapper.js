import "./Wrapper.css";
import React from "react";

const Twrapper = ({ children }) => {
  return (
    <div className="">
      <div className="row Touter justify-content-center">
        <div className="wrapper col-4">{children}</div>
      </div>
    </div>
  );
};

export default Twrapper;
