import React from "react";
import Slider from "react-slick";
import "./EachMovie.css";

export default function EachMovie({ movie }) {
  return (
    <>
      <img className="movie" src={movie.img} alt="" />
    </>
  );
}
