// import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
  return (
    <div className="profile-menu-wrap">
      <div className="profile-menu">
        <Link to="/" className="profile-menu-active">
          Profile
        </Link>
        <Link to="/" className="hover5">
          About
        </Link>
        <Link to="/" className="hover5">
          Photos
        </Link>
        <Link to="/" className="hover5">
          Videos
        </Link>
        <Link to="/" className="hover5">
          Friends
        </Link>
        <Link to="/" className="hover5">
          More
        </Link>
      </div>
    </div>
  );
}
