import React from "react";

const Loading = () => {
  return (
    <div>
      <div
        style={{ height: "85vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="spinner-grow text-danger me-2" role="status"></div>
        <div className="spinner-grow text-warning me-2" role="status"></div>
        <div className="spinner-grow text-success" role="status"></div>
      </div>
    </div>
  );
};

export default Loading;
