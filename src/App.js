import React from "react";
import Stopwatch from "./component/Stopwatch";
import UsersTable from "./component/UsersTable";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>React Assignment</h1>

      <Stopwatch />
      <UsersTable />
    </div>
  );
};

export default App;