import "./Wrapper.css";
import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div tabIndex={0}>
      <div className="row outer justify-content-center">
        <div className="wrapper col-4">{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
