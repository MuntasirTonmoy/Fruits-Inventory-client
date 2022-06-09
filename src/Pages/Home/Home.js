import React from "react";
import useItems from "../../hooks/useItems";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Items from "./Items/Items";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Items></Items>
      <Contact></Contact>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
