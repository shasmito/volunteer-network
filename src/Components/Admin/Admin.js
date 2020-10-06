import React, { useEffect, useState } from "react";
import { findDOMNode } from "react-dom";
import { Link } from "react-router-dom";

const Admin = () => {
  const [volunteerList, setVolunteerList] = useState([]);

  useEffect(() => {
    fetch("https://volunteer-network55.herokuapp.com/admin")
      .then((res) => res.json())
      .then((data) => setVolunteerList(data));
  }, []);

  const deleteVolunteer = (id) => {
    fetch(`https://volunteer-network55.herokuapp.com/deleteVolunteer/${id}`).then(() => {
      console.log("successful");
    });
  };
  return (
    <div className="row mt-5">
      <div className="col-3">
        <Link
          className="text-decoration-none d-block my-3 p-2 btn btn-light"
          to="/admin"
        >
          Volunteer register list
        </Link>
        <Link
          className="text-decoration-none d-block my-3 p-2 btn btn-light"
          to="/admin/addEvent"
        >
          Add event
        </Link>
      </div>
      <div className="col-9">
        <table className="table table-striped mb-0">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">Date</th>
              <th scope="col">volunteer List</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {volunteerList.length > 0 &&
              volunteerList.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.date}</td>
                  <td>{item.eventName}</td>
                  <td>
                    <button
                      onClick={() => deleteVolunteer(item._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {volunteerList.length === 0 && (
          <h3 className="bg-secondary text-center text-white p-4">Empty</h3>
        )}
      </div>
    </div>
  );
};

export default Admin;
