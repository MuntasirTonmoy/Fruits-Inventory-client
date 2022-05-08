import React from "react";
import banner from "../../../banner.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="container-fluid main-banner d-flex justify-content-center align-items-center">
      <div>
        <h1 className="banner-text text-center">
          {" "}
          Welcome to Fruits inventory
        </h1>
        <p
          style={{ color: "green" }}
          className="d-lg-block d-none text-center fs-4"
        >
          We provide fresh fruits around the country.
        </p>
      </div>
    </div>
  );
};

export default Banner;
