import React from "react";
import "./LandingPage.css";
import heroVideo from "../resources/meta-landing.mp4";
import img1 from "../resources/img1.jpg";
import img2 from "../resources/img2.jpg";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { Link as Smooth } from "react-scroll";
export default function LandingPage({ web3Api, account }) {
  return (
    <>
      <Navbar web3Api={web3Api} account={account} />
      <div className="video-container">
        <video
          className="landing-video"
          autoPlay={true}
          preload="true"
          loop={true}
          muted={true}
          src={heroVideo}
        ></video>
      </div>
      <div className="arrow-container">
        <Smooth
          to="brief-container"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <i className="arrow fa-solid fa-circle-chevron-down"></i>
        </Smooth>
      </div>
      <div className="brief-container">
        <section className="brief-1">
          <div className="img1-container">
            <img src={img1} alt="" />
          </div>
          <div className="content-1">
            <h3 style={{ color: "red" }}>Why MetaCinema?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              deleniti quibusdam aliquam sint ratione assumenda recusandae fuga
              amet vero quisquam dolore blanditiis omnis, in deserunt eveniet
              mollitia perferendis beatae harum? Nam id in ut voluptatibus magni
              sunt nostrum voluptates? Incidunt debitis ratione asperiores et
              aliquam totam, voluptatibus laudantium in earum itaque inventore
              mollitia maxime neque fuga magni non ducimus repellendus. Iusto
              hic veritatis aut. Eum amet ipsam sunt minima, eaque unde facilis
              sapiente praesentium veritatis perspiciatis similique a
              repellendus debitis rem iusto in assumenda hic, maiores sint quasi
              itaque beatae!
            </p>
          </div>
        </section>
        <section className="brief-2">
          <div className="content-2">
            <h2 style={{ color: "blue" }}>Watch Now</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur expedita in facilis fugiat saepe iste similique nisi
              hic dolorem, praesentium odit ducimus enim quas nostrum autem
              dolorum. Mollitia, eius laboriosam? Tenetur, laudantium iste sequi
              doloribus nostrum reiciendis enim, libero fugit consectetur
              consequuntur, error voluptates nam veritatis nesciunt cum autem
              quis qui quaerat amet! Recusandae est error maiores,
              exercitationem praesentium nemo.
            </p>
            <Link to={"/store"}>
              <button className="now-showing">Now showing</button>
            </Link>
          </div>
          <div className="img2-container">
            <img src={img2} alt="" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
