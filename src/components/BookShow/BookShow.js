import React from "react";
import ComingUp from "./ComingUp/ComingUp";
import { useState } from "react";
import "./BookShow.css";

export default function BookShow({ movies }) {
  const [modalActive, setModalActive] = useState(true);
  //False = Theatre  True = Medival
  const [themeChoice, setThemeChoice] = useState(false);
  //False = Night True = Day
  const [dayLightChoice, setDaylightChoice] = useState(false);
  //Counter for payment modal
  const [pageCount, setPageCount] = useState(1);
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
              />
            ))}
          </div>
        </div>
      </div>
      {/* // Modal */}

      {modalActive && (
        <div className="modal-store-bd">
          <div className="modal-store">
            {pageCount == 1 && (
              <div className="themes">
                <div>
                  <h4>Choose your Theme</h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <img
                        src="https://etimg.etb2bimg.com/photo/77166079.cms"
                        alt=""
                      />
                      <div>
                        <p>Theatre</p>
                        <input type="radio" name="theme" value="theatre" />
                      </div>
                    </div>
                    <div>
                      <img
                        src="https://static.onecms.io/wp-content/uploads/sites/6/2020/07/23/GettyImages-53374659.jpg"
                        alt=""
                      />
                      <div style={{ textAlign: "center" }}>
                        <p>Drive In</p>
                        <input type="radio" name="theme" value="drivein" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {pageCount == 2 && <div className="daylight"></div>}
            {pageCount == 3 && <div className="confirmation"></div>}
            <div>
              {pageCount > 1 ? (
                <button onClick={() => setPageCount((prev) => prev - 1)}>
                  Prev
                </button>
              ) : (
                <button onClick={() => setModalActive(false)}>Close</button>
              )}
              {pageCount < 3 ? (
                <button onClick={() => setPageCount((prev) => prev + 1)}>
                  Next
                </button>
              ) : (
                <button>I confirm</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
