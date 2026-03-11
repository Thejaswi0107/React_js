import React from "react";
import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Services</h1>

      <ul>
        <li><Link to="web">Web Development</Link></li>
        <li><Link to="app">App Development</Link></li>
        <li><Link to="uiux">UI/UX Design</Link></li>
      </ul>

      <Outlet />
    </div>
  );
}

export default Services;