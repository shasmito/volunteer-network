import React from "react";
import { Link } from "react-router-dom";

const AddEvent = () => {
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
      <div className="col-9 bg-light py-5">
        <form
          action="https://volunteer-network55.herokuapp.com/addEvent"
          method="POST"
          target="_blank"
          className="bg-white py-4 px-2 rounded"
        >
          <div className="row">
            <div className="col-md-6 px-4">
              <h5>Event Title</h5>
              <input
                required
                type="text"
                placeholder="Enter Title"
                className="form-control-plaintext border p-2 my-3"
                name="name"
              />
            </div>
            <div className="col-md-6 px-4">
              <h5>Event Thumbnail URL</h5>
              <input
                required
                type="text"
                placeholder="https://example/image.png"
                className="form-control-plaintext border p-2 my-3"
                name="img"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary w-25 mt-3"
          />
        </form>
      </div>
    </div>
  );
};

export default AddEvent;
