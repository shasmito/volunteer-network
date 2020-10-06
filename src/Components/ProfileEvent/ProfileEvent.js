import React, { useEffect, useState } from "react";

const ProfileEvent = (props) => {
  const event = props.event;
  console.log(event);
  const [eventImg, setEventImg] = useState({});

  useEffect(() => {
    fetch(`https://volunteer-network55.herokuapp.com/singleEvent/${event.eventID}`)
      .then((res) => res.json())
      .then((data) => {
        setEventImg(data.img);
        console.log(data);
      });
  }, []);

  const deleteVolunteer = (id) => {
    fetch(`https://volunteer-network55.herokuapp.com/deleteVolunteer/${id}`).then(() => {
      console.log("successful");
    });
  };

  return (
    <div className="col-md-6 mb-2">
      <div className="row">
        <div className="col-6">
          <img
            style={{ height: "100%", width: "100%" }}
            className="rounded border"
            src={eventImg}
            alt={event.eventName}
          />
        </div>
        <div className="col-6">
          <h3 className="text-capitalize">{event.eventName}</h3>
          <p>{event.date}</p>
          <button
            onClick={() => deleteVolunteer(event._id)}
            className="btn btn-danger"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEvent;
