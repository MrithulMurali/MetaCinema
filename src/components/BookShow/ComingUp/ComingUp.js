import React, { useEffect, useState } from "react";
import "./ComingUp.css";
export default function ComingUp({
  web3Api,
  account,
  id,
  img,
  price,
  moviedata,
  openModal,
  openPayment,
}) {
  const [hoverPrice, setHoverPrice] = useState(false);
  const [showOwned, setShowOwned] = useState(false);
  const { web3, contract } = web3Api;

  useEffect(() => {
    const checkOwned = async () => {
      const contract_data = await contract;
      const showHash = web3.utils.utf8ToHex(id);
      console.log(showHash);
      const isOwned = await contract_data.checkOwnerShip(showHash);
      setShowOwned(isOwned);
    };
    contract && account && checkOwned();
  }, [contract, account]);
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
            <h5>Streaming Now</h5>
          </div>
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "space-between",
            }}
          >
            {!showOwned ? (
              <button
                className="book-btn"
                style={{
                  padding: "8px 6px",
                  cursor: "pointer",
                  background: "none",
                  border: "1px solid black",
                }}
                onClick={() => {
                  moviedata({ id, price });
                  openPayment();
                }}
                onMouseEnter={() => setHoverPrice(true)}
                onMouseLeave={() => setHoverPrice(false)}
              >
                {!hoverPrice ? (
                  <b>Book show</b>
                ) : (
                  <strong>{price} MATIC</strong>
                )}
              </button>
            ) : (
              <button
                className="book-btn"
                style={{
                  padding: "8px 20px",
                  cursor: "pointer",
                  background: "none",
                  border: "1px solid black",
                  fontWeight: "bold",
                }}
                onClick={() => {
                  openModal();
                }}
              >
                Play
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
