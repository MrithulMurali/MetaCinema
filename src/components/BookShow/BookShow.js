import React from "react";
import ComingUp from "./ComingUp/ComingUp";
import { useState } from "react";
import "./BookShow.css";
import { useNavigate } from "react-router-dom";

export default function BookShow({ movies, theme }) {
  const [value, setValue] = useState(null);
  const [modalActive, setModalActive] = useState();
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
  const confirmPayment = () => {
    //Web3 stuff
    //Send props
    theme({
      themeChoice,
      dayLightChoice,
      starryNight,
    });
    setTimeout(() => {
      navigate("../meta-cinema");
    }, [1000]);
  };

  const PaymentConfirmationScreen = (
    <div className="confirmation-container">
      <div className="confirmation">
        <div>
          <h3 style={{ marginTop: "50px", fontSize: "2rem" }}>
            One last step to the MetaFAM
          </h3>
          <h4 style={{ marginTop: "100px", fontSize: "1.2rem" }}>
            Confirm Payment
          </h4>
          <p>
            Are you sure you want to make a payment of {value}MATIC to
            MetaCinema and book your seats.
          </p>
        </div>
      </div>
    </div>
  );
  const PaymentButton = (
    <button onClick={confirmPayment} className="confirm-btn-modal">
      I confirm
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
                key={movie.id}
                img={movie.img}
                streamingAt={movie.streamingAt}
                price={movie.price}
                value={(price) => setValue(price)}
                openModal={() => setModalActive(true)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* // Modal */}

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
              {pageCount > 1 ? (
                <button
                  className="prev-button-modal"
                  onClick={() => setPageCount((prev) => prev - 1)}
                >
                  Prev
                </button>
              ) : (
                <button
                  className="close-btn-modal"
                  onClick={() => setModalActive(false)}
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
