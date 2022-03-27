import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/Navbar.js";
import Footer from "../Footer/Footer.js";
import "./Store.css";
import NowShowing from "../NowShowing/NowShowing.js";
import BookShow from "../BookShow/BookShow.js";
export default function Store({ theatreTheme, account, web3Api }) {
  const NOW_SHOWING = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/M/MV5BYjVmMGU3ZjAtMDNmMy00ZmE2LWI0ODQtMzc2NDczOTdlZjYyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    },
  ];
  const BOOK_SHOWS = [
    {
      id: "1410474",
      streamId: "2deec0e0-7dc8-4872-93e8-bab9af3cb645",
      img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      price: 1.23,
    },
    {
      id: "1410475",
      streamId: "af612db3-cca7-4883-a7b5-5b7f364e5ee5",
      img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
      price: 1.11,
    },
    {
      id: "1410476",
      streamId: "07435f2c-a211-465a-ac7a-f07b2cebe68b",
      img: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      price: 1.01,
    },
  ];

  const [newShows, setNewShows] = useState(BOOK_SHOWS);
  const [isOwner, setIsOwner] = useState(false);
  const { web3, contract } = web3Api;
  useEffect(() => {
    const checkOwnerShip = async () => {
      try {
        const contract_data = await contract;
        const owner = await contract_data.getContractOwner();
        setIsOwner(owner === account);
        console.log(owner);
        console.log(account);
        console.log(isOwner);
      } catch (err) {
        alert("Error occurred. Check Console!");
        console.error(err.message);
      }
    };
    account && contract && checkOwnerShip();
  }, [account, contract]);
  return (
    <>
      <NavBar
        sendMovieData={(newShow) => {
          setNewShows((prev) => {
            return [...prev, newShow];
          });
        }}
        isOwner={isOwner}
        web3Api={web3Api}
        account={account}
      />
      <div className="box-container">
        <div className="box">
          <div style={{ flexBasis: "50%" }}>
            <h2>
              <span>Experience</span> the never before
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              et repellat architecto recusandae ipsum! Autem perspiciatis quae
              distinctio repellendus labore, laudantium, iure animi earum odio
              numquam debitis! Fugit, eveniet cupiditate. Possimus qui ex natus
              impedit quae dolores? Et tenetur laboriosam quas consequatur amet
              cupiditate fugiat dolores! Nemo quis deserunt a. Expedita
              temporibus quasi, at aut est eveniet facere atque perferendis.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/7234212/pexels-photo-7234212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </div>
      </div>
      {/* <Carousel /> */}
      <NowShowing movies={NOW_SHOWING} />
      <BookShow
        account={account}
        web3Api={web3Api}
        movies={newShows}
        theme={theatreTheme}
      />
      <Footer />
    </>
  );
}
