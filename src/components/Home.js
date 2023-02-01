import React from "react";
import plumberbg from "../img/plumberlandingbg5.jpg";

const Home = () => {
  return (
    <div>
      <p>Websites ONLY for plumbers</p>
      <p>Helping plumbers connect to new clients in a digital age</p>
      <img src={plumberbg} className="plumber-bg" alt="" />
    </div>
  );
};

export default Home;
