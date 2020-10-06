import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

const Navbar = () => {
  const [loginUser, setLoginUser] = useContext(userContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
        <img
          style={{ height: "100px" }}
          src="https://i.ibb.co/wBwZKfZ/logo.png"
          alt="Logo"
        />
      </Link>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Donation
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Events
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Blog
          </Link>
        </li>

        {loginUser.email ? (
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              {loginUser.name}
            </Link>
          </li>
        ) : (
          <>
            <Link className="btn btn-primary m-2" to="/login">
              Register
            </Link>
            <Link className="btn btn-dark m-2" to="/admin">
              Admin
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
