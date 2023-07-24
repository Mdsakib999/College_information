import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const Header = () => {

  const {user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allColleges">All College</Link>
            </li>
          </ul>
        </div>
        <a className="normal-case font-semibold text-3xl">
          In<span className="text-blue-700">fo</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-xl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allColleges">All College</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? (<button onClick={handelLogout} className="btn btn-outline btn-primary">Log Out</button>) : (<Link to="/login">
          <button className="btn btn-outline btn-primary">Login</button>
        </Link>)
        }
        
      </div>
    </div>
  );
};

export default Header;
