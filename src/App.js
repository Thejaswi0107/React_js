import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>User List Application</h1>

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;