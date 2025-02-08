import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState, useContext } from "react";
import left from "../../components/assets/img/left.png";
import right from "../../components/assets/img/right.png";
import { KeyContext } from "../../context/KeyContext";
const RadioButtonGroup = ({ onOptionChange }) => {
  const { selectedOption, setSelectedOption } = useContext(KeyContext);
  const handleClick = (value) => {
    onOptionChange(value); // Call the parent's function
    setSelectedOption(value);
  };

  return (
    <div>
      <FormControl className="d-flex justify-content-center">
        <FormLabel
          id="demo-row-radio-buttons-group-label "
          className="d-flex justify-content-center"
        >
          Mapping
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          className="d-flex justify-content-center"
        >
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="LeftHand"
            onClick={() => handleClick("LeftHand")}
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="RightHand"
            onClick={() => handleClick("RightHand")}
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Custom"
            onClick={() => handleClick("Custom")}
          />
        </RadioGroup>
      </FormControl>
      {/* Conditional rendering of the image based on selected option */}
      {/* {selectedOption && (
        <div
          className="d-flex justify-content-center mt-3"
          style={{ height: "auto", width: "auto" }}
        >
          {selectedOption === "LeftHand" && (
            <img
              src={left}
              style={{
                width: "30%",
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
          {selectedOption === "RightHand" && (
            <img
              src={right}
              style={{
                width: "30%",
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
            <div>
              <p>text guiding about precautions about key mappings</p>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default RadioButtonGroup;
