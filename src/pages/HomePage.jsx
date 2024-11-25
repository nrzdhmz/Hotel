import React from "react";
import CheckInFilter from "../components/CheckInFilter";
import Cityoptions from "../components/Cityoptions";
import Inspiration from "../components/Inspiration";
import Wallpaper from "../assets/images/wallpaper.png";

const HomePage = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="search">
            <CheckInFilter />
          </div>
          <div className="wallpaper">
            <img src={Wallpaper} alt="wallpaper" />
          </div>
        </div>
      </section>
      <Inspiration />
      <Cityoptions />
    </main>
  );
};

export default HomePage;
