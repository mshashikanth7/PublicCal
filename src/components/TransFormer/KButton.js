import "./KButton.css";
import { useState } from "react";
//this directory is not in use for handling input for now
const getStyleName = (btn) => {
  const className = {
    "=": "Kequals",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };
  return className[btn] || "";
};

const KButton = ({ value }) => {
  const [keyInput, setKeyInput] = useState("");

  const handleKeyDown = (e) => {
    e.preventDefault();

    const keyMappings = {
      Meta: "Meta",
      Windows: "Windows",

      OS: "OS",
      Control: "Ctrl",
      ArrowUp: "↑",
      ArrowDown: "↓",
      ArrowLeft: "←",
      ArrowRight: "→",
      Enter: "Enter",
      Tab: "Tab",
      Escape: "Esc",
      Delete: "Del",
      Backspace: "Backspace",
      " ": "Space",
      AltLeft: "Option", // Left Option key on Mac
      AltRight: "Option", // Right Option key on Mac
      Alt: "Option", // Generic Option/Alt key
    };

    // Handle Function keys (F1-F20)
    if (e.key.match(/^F[1-9][0-9]?$/)) {
      setKeyInput(e.key);
      return;
    }

    // Handle Command key
    if (e.key === "Meta" /*|| e.metaKey*/) {
      setKeyInput("Meta");
      return;
    }

    // Clear input if Backspace is pressed
    if (e.key === "Backspace") {
      setKeyInput("");
      return;
    }

    // Handle mapped special keys
    if (keyMappings[e.key] || keyMappings[e.code]) {
      setKeyInput(keyMappings[e.key] || keyMappings[e.code]);
      return;
    }

    // Handle regular single character keys
    if (e.key.length === 1) {
      setKeyInput(e.key);
      return;
    }

    // Handle other special keys not in mapping
    if (
      e.key !== "Shift" &&
      e.key !== "Control" &&
      e.key !== "Meta" &&
      e.key !== "Alt"
    ) {
      setKeyInput(e.key);
      console.log(e.key);
    }
  };

  return (
    <>
      <button
        className={`${getStyleName(value)} Kbutton`}
        disabled
        style={{ fontSize: "30px" }}
      >
        {value} →
      </button>
      <input
        required
        id={value}
        value={keyInput}
        className={`${getStyleName(value)} KI`}
        onKeyDown={handleKeyDown}
        placeholder={"key that Invokes" + value}
        readOnly
        style={{ paddingRight: "20px" }}
      />
    </>
  );
};

export default KButton;
