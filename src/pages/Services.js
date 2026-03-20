import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Services</h1>

      <Link to="web">Web</Link> | 
      <Link to="app"> App</Link>

      <Outlet />
    </div>
  );
}

export default Services;