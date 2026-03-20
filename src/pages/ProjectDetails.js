import { useParams, Link } from "react-router-dom";

function ProjectDetails() {

  const { id } = useParams();

  return (
    <div>

      <Link to="/projects">← Back</Link>

      <h1>Project Details</h1>

      {id === "todo" && (
        <p>
          This is a Todo App where users can add, delete tasks using React useState.
        </p>
      )}

      {id === "tictactoe" && (
        <p>
          This is a Tic Tac Toe game built using React. It allows two players to play.
        </p>
      )}

      {id === "crud" && (
        <p>
          This is a CRUD Application using API where we can create, read, update and delete users.
        </p>
      )}

    </div>
  );
}

export default ProjectDetails;