import React, { useState } from "react";
import "./ComingUp.css";
export default function ComingUp({
  img,
  streamingAt,
  price,
  modalActive,
  value,
  openModal,
}) {
  const [hoverPrice, setHoverPrice] = useState(false);

  return (
    <>
      <div>
        <div>
          <img className="bookshow-img" src={img} />
        </div>
        <div className="show-footer">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h5>Streaming @</h5>
            <h4>
              <strong style={{ fontSize: "1.2rem" }}>{streamingAt}</strong>
            </h4>
          </div>
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "space-between",
            }}
          >
            <button
              className="book-btn"
              style={{
                padding: "8px 6px",
                cursor: "pointer",
                background: "none",
                border: "1px solid black",
              }}
              onClick={() => {
                value(price);
                openModal();
              }}
              onMouseEnter={() => setHoverPrice(true)}
              onMouseLeave={() => setHoverPrice(false)}
            >
              {!hoverPrice ? <b>Book show</b> : <strong>{price} MATIC</strong>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
