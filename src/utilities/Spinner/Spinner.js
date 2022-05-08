import React from "react";

const Spinner = () => {
  return (
    <div
      style={{ height: "85vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div class="spinner-grow text-danger" role="status"></div>
      <div class="spinner-grow text-warning" role="status"></div>
      <div class="spinner-grow text-success" role="status"></div>
    </div>
  );
};

export default Spinner;
