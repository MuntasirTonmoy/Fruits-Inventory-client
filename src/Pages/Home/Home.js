import React from "react";
import useItems from "../../hooks/useItems";
import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Items from "./Items/Items";

const Home = () => {
  const { fruits } = useItems();

  return (
    <div>
      <Banner></Banner>
      {fruits?.length > 0 ? (
        <div
          style={{ height: "10vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="spinner-grow text-danger me-2" role="status"></div>
          <div className="spinner-grow text-warning me-2" role="status"></div>
          <div className="spinner-grow text-success" role="status"></div>
        </div>
      ) : (
        <>
          <Items></Items>
        </>
      )}
      <Contact></Contact>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
