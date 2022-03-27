import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar({ web3Api }) {
  const [account, setAccount] = useState(null);
  useEffect(() => {
    const getAccounts = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3Api.web3 && getAccounts();
  }, [web3Api.web3]);

  useEffect(() => {
    console.log("running");
    web3Api.web3 &&
      web3Api.provider.on("accountsChanged", (accounts) => {
        setAccount(accounts[0]);
      });
  }, [web3Api.provider]);

  return (
    <nav className="navbar">
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        <h2>MetaCinema</h2>
      </Link>
      <div className="links">
        {window.location.pathname === "/store" && (
          <div className="booked-shows">
            <p style={{ cursor: "pointer" }}>Booked Shows</p>{" "}
          </div>
        )}
        <div className="nav-btn-container">
          {account ? (
            <div>
              <span>{account}</span>
            </div>
          ) : (
            <button
              onClick={() =>
                web3Api.provider.request({ method: "eth_requestAccounts" })
              }
            >
              Connect to wallet
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
