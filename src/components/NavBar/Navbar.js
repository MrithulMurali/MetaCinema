import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export default function Navbar({ web3Api, account, isOwner, sendMovieData }) {
  const [newShowModal, setNewShowModal] = useState(false);
  const [coverImg, setCoverImg] = useState(null);
  const [showTitle, setShowTitle] = useState(null);
  const [showPrice, setShowPrice] = useState(null);

  const addShowHandler = async (e) => {
    e.preventDefault();
    try {
      const stream = await axios.post(
        "https://livepeer.com/api/stream",
        {
          name: `${showTitle}`,
          profiles: [
            {
              name: "720p",
              bitrate: 2000000,
              fps: 30,
              width: 1280,
              height: 720,
            },
            {
              name: "480p",
              bitrate: 1000000,
              fps: 30,
              width: 854,
              height: 480,
            },
            {
              name: "360p",
              bitrate: 500000,
              fps: 30,
              width: 640,
              height: 360,
            },
          ],
        },
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer e28cbad2-d9bd-4494-9636-8e4701ec4e74`,
          },
        }
      );
      const streamId = stream.data.id;
      console.log(streamId);
      sendMovieData({
        id: Math.floor(Math.random() * (1000000 - 1 + 1)) + 1,
        streamId,
        img: coverImg,
        price: showPrice,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      {newShowModal && (
        <div className="modal-new-show">
          <div className="modal-new-show-container">
            <div className="new-show-content">
              <h2>Add new show</h2>
              <form onSubmit={addShowHandler} className="new-show-input">
                <input
                  onChange={(e) => {
                    setCoverImg(e.target.value);
                  }}
                  type="text"
                  placeholder="Cover Image"
                />
                <input
                  onChange={(e) => {
                    setShowTitle(e.target.value);
                  }}
                  type="text"
                  placeholder="Title"
                />
                <input
                  onChange={(e) => {
                    setShowPrice(parseInt(e.target.value));
                  }}
                  type="text"
                  placeholder="Price"
                />
                <div className="new-show-btns">
                  <button type="submit">Add Show</button>
                  <button
                    onClick={() => {
                      setNewShowModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <nav className="navbar">
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          <h2>MetaCinema</h2>
        </Link>
        <div className="links">
          {isOwner && (
            <div className="booked-shows">
              <p
                style={{ cursor: "pointer", marginRight: "40px" }}
                onClick={() => {
                  setNewShowModal(true);
                }}
              >
                Add new show
              </p>{" "}
            </div>
          )}
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
    </>
  );
}
