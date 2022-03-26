import React, { useState } from "react";
import NavBar from "../NavBar/Navbar.js";
import Footer from "../Footer/Footer.js";
import "./Store.css";
import Carousel from "../Carousel/Carousel.js";
import NowShowing from "../NowShowing/NowShowing.js";
import BookShow from "../BookShow/BookShow.js";
export default function Store({ theatreTheme }) {
  const NOW_SHOWING = [
    {
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
      id: 1,
      img: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      price: 1.23,
      streamingAt: "6pm",
    },
    {
      id: 2,

      img: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      price: 1.11,
      streamingAt: "8pm",
    },
    {
      id: 3,

      img: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      price: 1.01,
      streamingAt: "11pm",
    },
  ];
  return (
    <>
      <NavBar />
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
      <BookShow movies={BOOK_SHOWS} theme={theatreTheme} />
      <Footer />
    </>
  );
}
