import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>MetaCinema</h2>
      <div className="nav-btn-container">
        <button>Connect to wallet</button>
      </div>
    </nav>
  );
}
