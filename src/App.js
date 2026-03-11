import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Services from "./pages/Services";

import WebDevelopment from "./services/WebDevelopment";
import AppDevelopment from "./services/AppDevelopment";
import UIUX from "./services/UIUX";

import "./App.css";

function App() {
  return (
    <Router>

      <nav className="navbar">
        <h2>My Website</h2>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />}>
          <Route path="web" element={<WebDevelopment />} />
          <Route path="app" element={<AppDevelopment />} />
          <Route path="uiux" element={<UIUX />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

    </Router>
  );
}

export default App;