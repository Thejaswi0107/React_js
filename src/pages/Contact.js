import React, { useReducer } from "react";

const initialState = { name: "", email: "" };

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

function Contact() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Contact</h1>

      <input
        placeholder="Name"
        onChange={(e) =>
          dispatch({ name: "name", value: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          dispatch({ name: "email", value: e.target.value })
        }
      />

      <p>Name: {state.name}</p>
      <p>Email: {state.email}</p>
    </div>
  );
}

export default Contact;