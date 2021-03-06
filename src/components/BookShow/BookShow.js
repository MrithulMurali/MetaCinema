import React from "react";
import ComingUp from "./ComingUp/ComingUp";
import { useState } from "react";
import axios from "axios";
import "./BookShow.css";

import { useNavigate } from "react-router-dom";

export default function BookShow({ web3Api, movies, theme, account }) {
  const { web3, contract } = web3Api;
  const [moviedata, setMovieData] = useState(null);
  const [modalActive, setModalActive] = useState(false);
  //False = Theatre  True = DriveIn
  const [themeChoice, setThemeChoice] = useState(null);
  //False = Night True = Day
  const [dayLightChoice, setDaylightChoice] = useState(null);
  //Fale = No start True = Stars
  const [starryNight, setStarryNight] = useState(null);
  //Counter for payment modal
  const [pageCount, setPageCount] = useState(1);
  // navigator
  const navigate = useNavigate();
  //Confirm payment to movie screen
  //Playback stream
  const [streamId, setStreamId] = useState(null);
  const [playback, setPlayback] = useState(null);
  const confirmPayment = async () => {
    //Web3 stuff

    const hexShowId = web3.utils.utf8ToHex(moviedata.id);
    const orderHash = web3.utils.soliditySha3(
      { type: "bytes16", value: hexShowId },
      { type: "address", value: account }
    );
    const value = web3.utils.toWei(String(moviedata.price));

    const keyHash = web3.utils.sha3("devfolio-secret");
    const proof = web3.utils.soliditySha3(
      { type: "bytes32", value: keyHash },
      { type: "bytes32", value: orderHash }
    );
    console.log(proof, value, hexShowId);

    //Contract methods
    try {
      const contract_data = await contract;
      const res = await contract_data.purchaseMovie(hexShowId, proof, {
        from: account,
        value,
      });
      alert("Transaction successful. Welcome to MetaFam.");
      console.log(res);
      window.location.reload();
    } catch (error) {
      alert("An error occured. Check console for details!");
      console.error(error);
    }
  };
  const redirectHandler = async () => {
    //Fetch playback ID from livepeer
    try {
      const res = await axios.get(
        `https://livepeer.com/api/stream/${streamId}`,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer e28cbad2-d9bd-4494-9636-8e4701ec4e74`,
          },
        }
      );
      if (res) {
        console.log(res.data.playbackId);
        //Send props
        theme({
          playback: res.data.playbackId,
          themeChoice,
          dayLightChoice,
          starryNight,
        });
        navigate("../meta-cinema");
      }
    } catch (err) {
      alert("Error occured! check console");
      console.error(err.message);
    }
  };
  const PaymentConfirmationScreen = (
    <div className="confirmation-container">
      <div className="confirmation">
        <div>
          <h3 style={{ marginTop: "150px", fontSize: "1.5rem" }}>
            Enter the verse!
          </h3>
        </div>
      </div>
    </div>
  );
  const PaymentButton = (
    <button onClick={redirectHandler} className="redirect confirm-btn-modal">
      Take me there!
    </button>
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ marginTop: "150px", width: "60%" }}>
          <h5
            style={{
              fontSize: "1.3rem",
              padding: "10px 10px",
              background: "white",
              color: "black",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
          >
            Book your show
          </h5>
          <div className="bookshow-container">
            {movies.map((movie) => (
              <ComingUp
                web3Api={web3Api}
                account={account}
                key={movie.id}
                id={movie.id}
                streamId={movie.streamId}
                img={movie.img}
                price={movie.price}
                streamData={(id) => setStreamId(id)}
                moviedata={(data) => setMovieData(data)}
                openModal={() => setModalActive(true)}
                openPayment={() => {
                  moviedata && confirmPayment();
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}

      {modalActive && (
        <div className="modal-store-bd">
          <div className="modal-store">
            {pageCount === 1 && (
              <div className="themes">
                <div>
                  <h4
                    style={{
                      textAlign: "center",
                      padding: "20px 15px",
                      fontSize: "1.2rem",
                    }}
                  >
                    Choose your Theme
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "30px",
                    }}
                  >
                    {/* Theatre choice */}
                    <div
                      className="choices"
                      style={{ marginRight: "40px" }}
                      onClick={() => {
                        setPageCount((prev) => prev + 1);
                        setThemeChoice(false);
                      }}
                    >
                      <img
                        src="https://etimg.etb2bimg.com/photo/77166079.cms"
                        alt=""
                      />
                      <div
                        style={{
                          textAlign: "center",
                          padding: "1px",
                          background: "lightgrey",
                        }}
                      >
                        <p>Theatre</p>
                        {/* <input type="radio" name="theme" value="theatre" /> */}
                      </div>
                    </div>

                    {/* DriveIn choice */}

                    <div
                      className="choices"
                      onClick={() => {
                        setPageCount((prev) => prev + 1);
                        setThemeChoice(true);
                      }}
                    >
                      <img
                        src="https://static.onecms.io/wp-content/uploads/sites/6/2020/07/23/GettyImages-53374659.jpg"
                        alt=""
                      />
                      <div
                        style={{
                          textAlign: "center",
                          padding: "1px",
                          background: "lightgrey",
                        }}
                      >
                        <p>Drive In</p>
                        {/* <input type="radio" name="theme" value="drivein" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Daylight choices */}
            {pageCount === 2 && (
              <div className="daylight">
                <div>
                  <h4
                    style={{
                      textAlign: "center",
                      padding: "20px 15px",
                      fontSize: "1.2rem",
                    }}
                  >
                    Choose your Daytime
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "30px",
                    }}
                  >
                    {/* Dawn choice */}
                    <div
                      className="choices"
                      style={{ marginRight: "40px" }}
                      onClick={() => {
                        setPageCount((prev) => prev + 1);
                        setDaylightChoice(true);
                      }}
                    >
                      <img
                        src="https://www.tessvs.com/wp-content/uploads/2020/08/alfresco-cinemas-movie-magic-stars-1.jpg"
                        alt=""
                      />
                      <div
                        style={{
                          textAlign: "center",
                          padding: "1px",
                          background: "lightgrey",
                        }}
                      >
                        <p>Dawn</p>
                        {/* <input type="radio" name="theme" value="theatre" /> */}
                      </div>
                    </div>

                    {/* Night choice */}

                    <div
                      className="choices"
                      onClick={() => {
                        setPageCount((prev) => prev + 1);
                        setDaylightChoice(false);
                      }}
                    >
                      <img
                        src="https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/0/d7/0d710b06-e94a-11ea-bc6a-c3baf3bf17e2/5f492e3d12446.image.jpg?resize=1200%2C713"
                        alt=""
                      />
                      <div
                        style={{
                          textAlign: "center",
                          padding: "1px",
                          background: "lightgrey",
                        }}
                      >
                        <p>Night</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Starry Night */}
            {pageCount === 3 && !dayLightChoice && (
              <div className="daylight">
                <div>
                  <h4
                    style={{
                      textAlign: "center",
                      padding: "20px 15px",
                      fontSize: "1.2rem",
                    }}
                  >
                    Choose your Sky theme
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "30px",
                    }}
                  >
                    {/* Star choice */}
                    <div
                      className="choices"
                      style={{ marginRight: "40px" }}
                      onClick={() => {
                        setPageCount((prev) => prev + 1);
                        setStarryNight(true);
                      }}
                    >
                      <img
                        src="https://images.pexels.com/photos/1257860/pexels-photo-1257860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                      />
                      <div
                        style={{
                          textAlign: "center",
                          padding: "1px",
                          background: "lightgrey",
                        }}
                      >
                        <p>Starry Night</p>
                        {/* <input type="radio" name="theme" value="theatre" /> */}
                      </div>
                    </div>

                    {/* No star choice */}

                    <div
                      className="choices"
                      onClick={() => {
                        setPageCount((prev) => prev + 1);
                        setStarryNight(false);
                      }}
                    >
                      <img
                        src="https://images.pexels.com/photos/4031043/pexels-photo-4031043.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                      />
                      <div
                        style={{
                          textAlign: "center",
                          padding: "1px",
                          background: "lightgrey",
                        }}
                      >
                        <p>No stars</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {pageCount === 3 && dayLightChoice && PaymentConfirmationScreen}
            {pageCount === 4 && !dayLightChoice && PaymentConfirmationScreen}
            <div
              className="btn-modal"
              style={{
                textAlign: "center",
                padding: "10px",
              }}
            >
              {pageCount > 1 && pageCount < 3 ? (
                <button
                  className="prev-button-modal"
                  onClick={() => setPageCount((prev) => prev - 1)}
                >
                  Prev
                </button>
              ) : (
                <button
                  className="close-btn-modal"
                  onClick={() => {
                    setPageCount(1);
                    setModalActive(false);
                  }}
                >
                  Close
                </button>
              )}

              {pageCount === 3 && dayLightChoice && PaymentButton}
              {pageCount === 4 && !dayLightChoice && PaymentButton}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
