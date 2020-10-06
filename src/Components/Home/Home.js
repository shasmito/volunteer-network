import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import Events from "../Events/Events";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://volunteer-network55.herokuapp.com/allEvents")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div>
      <div
        className="py-5"
        style={{
          background:
            "linear-gradient( rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9) ), url('https://i.ibb.co/1ZJZjq1/Mask-Group.png') center / cover",
        }}
      >
        <h1 className="text-center my-5 text-uppercase">
          I grow by helping people in need.
        </h1>
        <div className="input-group input-group-lg w-50 mx-auto">
          <input
            placeholder="search..."
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />
          <div className="input-group-prepend">
            <button
              className="input-group-text bg-primary text-white px-4"
              id="inputGroup-sizing-lg"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {events.map((event) => (
          <Events event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
