import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // READ (GET)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  // CREATE (POST)
  const addUser = () => {

    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    const newUser = { name, email };

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        setUsers([...users, data]);
        setName("");
        setEmail("");
      });
  };

  // DELETE
  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    }).then(() => {
      const updated = users.filter(user => user.id !== id);
      setUsers(updated);
    });
  };

  // EDIT BUTTON CLICK
  const editUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  // UPDATE (PUT)
  const updateUser = () => {

    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
      .then(res => res.json())
      .then(data => {

        const updatedList = users.map(user =>
          user.id === editId ? data : user
        );

        setUsers(updatedList);
        setEditId(null);
        setName("");
        setEmail("");
      });
  };

  return (
    <div className="container">

      <h1>CRUD User Management</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {editId ? (
          <button onClick={updateUser}>Update</button>
        ) : (
          <button onClick={addUser}>Add</button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="edit-btn" onClick={() => editUser(user)}>Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;