import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../../App";

const Register = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    fetch(`https://volunteer-network55.herokuapp.com/singleEvent/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, []);

  const [loginUser, setLoginUser] = useContext(userContext);
  return (
    <div className="w-50 mx-auto mt-5 border border-secondary p-5">
      <h2 className="my-4">Register as a volunteer</h2>
      <form
        action="https://volunteer-network55.herokuapp.com/registerEvent"
        method="POST"
        target="_blank"
      >
        <input
          readOnly
          className="form-control-plaintext border-bottom my-3"
          type="text"
          placeholder="Full Name"
          value={loginUser.name}
          name="name"
        />
        <input
          readOnly
          className="form-control-plaintext border-bottom my-3"
          type="text"
          placeholder="username or email"
          value={loginUser.email}
          name="email"
        />
        <input
          required="required"
          className="form-control-plaintext border-bottom my-3"
          type="date"
          placeholder="Date"
          name="date"
        />
        <input
          className="form-control-plaintext border-bottom my-3"
          type="text"
          placeholder="Description"
          name="description"
        />
        <input
          readOnly
          className="form-control-plaintext border-bottom my-3 text-capitalize"
          type="text"
          placeholder={event.name}
          value={event.name}
          name="eventName"
        />
        <input
          readOnly
          className="d-none form-control-plaintext border-bottom my-3 text-capitalize"
          type="text"
          placeholder={event._id}
          value={event._id}
          name="eventID"
        />
        <input
          type="submit"
          value="Register"
          className="btn btn-primary w-100"
        />
      </form>
    </div>
  );
};

export default Register;
