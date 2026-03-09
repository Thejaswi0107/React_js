import React, { useContext } from "react";
import { AppContext } from "./App";

function ContextBtn() {
  const { theme, toggleTheme } = useContext(AppContext);

  const btnStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: theme === "light" ? "#007bff" : "#ff9800",
    color: "#fff",
    fontWeight: "bold",
    marginTop: "10px",
  };

  return (
    <button style={btnStyle} onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
}

export default ContextBtn;