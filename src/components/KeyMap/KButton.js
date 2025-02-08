import "./KButton.css";
import { useState } from "react";

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
      Meta: "Meta", // Mac and Windows equivalence
      Windows: "Windows",
      OS: "OS",
      Control: "Control",
      ArrowUp: "ArrowUp",
      ArrowDown: "ArrowDown",
      ArrowLeft: "ArrowLeft",
      ArrowRight: "ArrowRight",
      Enter: "Enter",
      Tab: "Tab",
      Escape: "Esc",
      Delete: "Del",
      Backspace: "Backspace",
      Shift: "Shift",
      " ": "Space",
      AltLeft: "AltLeft", // For Mac's Option key
      AltRight: "AltRight", // For Mac's Option key
      Alt: "Alt", // Generic Option/Alt key
      Option: "Option",
    };

    // Handle Function keys (F1-F20)
    if (e.key.match(/^F[1-9][0-9]?$/)) {
      setKeyInput(e.key);
      return;
    }

    // Handle Command/Windows key difference
    if (e.key === "Meta" || e.key ==="Alt") {
      setKeyInput("Meta");
      return;
    }
    if (e.key === "Windows" || e.key === "OS") {
      setKeyInput("Windows");
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
        placeholder={`To invoke: \n${value}`}
        readOnly
        style={{
          paddingRight: "20px",
        }}
      />
    </>
  );
};

export default KButton;
