import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <h2>MetaCinema</h2>
      </Link>
      <div className="links">
        {window.location.pathname == "/store" ? (
          <div>
            <p style={{ cursor: "pointer" }}>Booked Shows</p>{" "}
          </div>
        ) : (
          <></>
        )}
        <div className="nav-btn-container">
          <button>Connect to wallet</button>
        </div>
      </div>
    </nav>
  );
}
