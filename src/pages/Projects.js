import { Link } from "react-router-dom";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>

      <ul>
        <li>
          <Link to="/projects/todo">Todo App</Link>
        </li>

        <li>
          <Link to="/projects/tictactoe">Tic Tac Toe Game</Link>
        </li>

        <li>
          <Link to="/projects/crud">CRUD App</Link>
        </li>
      </ul>
    </div>
  );
}

export default Projects;