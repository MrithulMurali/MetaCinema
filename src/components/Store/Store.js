import React from "react";
import NavBar from "../NavBar/Navbar.js";
import Footer from "../Footer/Footer.js";
import "./Store.css";
export default function Store() {
  const NOW_SHOWING = [
    {
      name: "Avengers Endgame",
      desc: "After the events of Infinity War leaves half of the universe in ruins, the remaining Avengers must work together to recruit old and new allies and muster all of their remaining strength and resources to defeat the mad titan Thanos and bring their friends back from the brink of oblivion.",
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
      <Footer />
    </>
  );
}
