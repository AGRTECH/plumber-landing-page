import React from "react";
import plumberbg from "../img/plumberlandingbg5.jpg";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <p className="home-firstline">Websites ONLY for plumbers</p>
        <p className="home-secondline">
          Helping plumbers connect to new clients in an evolving digital age
        </p>
        <button className="home-button">Get a site</button>
      </div>
      <img src={plumberbg} className="plumber-bg" alt="" />
    </div>
  );
};

export default Home;
