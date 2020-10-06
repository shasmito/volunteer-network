import React from "react";
import { Link } from "react-router-dom";

const Events = ({ event }) => {
  return (
    <div className="col-md-3 col-sm-6 mt-5">
      <div
        className="card position-relative border-0"
        style={{ width: "100%" }}
      >
        <img className="img-fluid" src={event.img} alt={event.name} />
        <div
          className="card-body bg-primary text-center position-absolute w-100"
          style={{ bottom: "0" }}
        >
          <h5 className="text-capitalize">
            <Link
              to={`/register/${event._id}`}
              className="text-decoration-none text-white"
            >
              {event.name}
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Events;
