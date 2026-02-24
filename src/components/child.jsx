function Child(props) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>City: {props.city}</p>
      <p>Qualification: {props.qualification}</p>
      <p>Experience: {props.experience} years</p>
    </div>
  );
}

export default Child;