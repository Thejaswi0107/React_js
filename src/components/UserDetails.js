import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {

  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="table-container">

      <h2>User Details</h2>

      <table className="user-table">
        <tbody>

          <tr>
            <td>Name</td>
            <td>{user.name}</td>
          </tr>

          <tr>
            <td>Username</td>
            <td>{user.username}</td>
          </tr>

          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>

          <tr>
            <td>Phone</td>
            <td>{user.phone}</td>
          </tr>

          <tr>
            <td>Website</td>
            <td>{user.website}</td>
          </tr>

          <tr>
            <td>Company Name</td>
            <td>{user.company.name}</td>
          </tr>

          <tr>
            <td>Street</td>
            <td>{user.address.street}</td>
          </tr>

          <tr>
            <td>City</td>
            <td>{user.address.city}</td>
          </tr>

          <tr>
            <td>Zip Code</td>
            <td>{user.address.zipcode}</td>
          </tr>

          <tr>
            <td>Latitude</td>
            <td>{user.address.geo.lat}</td>
          </tr>

          <tr>
            <td>Longitude</td>
            <td>{user.address.geo.lng}</td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}

export default UserDetails;