import React from "react";
import "./NowShowing.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EachMovie from "./EachMovie/EachMovie";

export default function NowShowing({ movies }) {
  //   return (
  //     <div className="showing-container">
  //       <h3>Now Showing</h3>
  //       <div>
  //         {movies.map((movie) => (
  //           <div className="movie-container">
  //             <div className="movie-">
  //               <h5>{movie.name}</h5>
  //               <div className="movie-img">
  //                 <img src={movie.img} alt="" />
  //               </div>
  //               <div className="content-container">
  //                 <p>{movie.desc}</p>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        style={{
          fontSize: "1.3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4
          style={{
            width: "60%",
            background: "#f0f0f0",
            color: "black",
            padding: "10px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          Now Showing
        </h4>
      </div>
      <div className="slider-container">
        <div className="slider">
          <Slider {...settings}>
            {movies.map((movie) => (
              <EachMovie key={movie.id} movie={movie} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
