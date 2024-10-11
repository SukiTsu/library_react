import React from "react";
import { Link } from "react-router-dom";
import "../../../assets/css/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>
        <Link to="/" className="link-navbar">
          <strong>coding / UI</strong>
        </Link>
      </h2>
    </div>
  );
}
