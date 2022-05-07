import React from "react";
import { BiSad } from "react-icons/bi";

const Error404 = () => {
  return (
    <div>
      <div
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center p-lg-5"
      >
        <div
          className="mx-auto p-3 m-0 fw-bold"
          style={{ fontSize: "4rem", color: "gray" }}
        >
          Error 404
          <p className="text-center">
            <BiSad></BiSad>
          </p>
          <p className="fw-light fs-3 text-center">Page not found.</p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
