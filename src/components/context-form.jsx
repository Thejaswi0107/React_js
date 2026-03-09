import React, { useContext } from "react";
import { AppContext } from "./App";
import ContextFields from "./context-fields";
import ContextBtn from "./context-btn";

function ContextForm() {
  const { theme } = useContext(AppContext);

  const formStyle = {
    width: "400px",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: theme === "light" ? "#ffffff" : "#2c2c2c",
    color: theme === "light" ? "#000" : "#fff",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    transition: "0.3s",
  };

  return (
    <div style={formStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Context Form
      </h2>

      <ContextFields />
      <ContextBtn />
    </div>
  );
}

export default ContextForm;