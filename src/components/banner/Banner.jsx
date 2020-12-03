import React from "react";
import "../banner/banner.css";
import desktop from "../../media/desktop-img.png";

const Banner = () => {
  return (
    <div>
      <picture>
        <img className="desktop-img" src={desktop} alt="desktop-img" />
      </picture>
    </div>
  );
};

export default Banner;
