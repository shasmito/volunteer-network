import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import ProfileEvent from "../ProfileEvent/ProfileEvent";

const Profile = () => {
  const [events, setEvents] = useState([]);
  const [loginUser, setLoginUser] = useContext(userContext);

  useEffect(() => {
    fetch(`https://volunteer-network55.herokuapp.com/userEvent/${loginUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  return (
    <div>
      <div className="row mt-4">
        {events.map((event) => (
          <ProfileEvent event={event} key={event.eventID} />
        ))}
        {events.length === 0 && <h3 className="m-5 p-5 text-center">Empty</h3>}
      </div>
    </div>
  );
};

export default Profile;
