import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div
      style={{ height: "50vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
