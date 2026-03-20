import { Link } from "react-router-dom";

function Auth() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome</h1>

      <Link to="/login">
        <button style={{ margin: "10px" }}>Login</button>
      </Link>

      <Link to="/register">
        <button style={{ margin: "10px" }}>Register</button>
      </Link>
    </div>
  );
}

export default Auth;