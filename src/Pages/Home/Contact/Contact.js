import React from "react";
import contact from "../../../contact.png";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const handleSumbit = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  return (
    <div
      id="contact"
      className="bg-light container  my-lg-5 d-lg-flex d-md-block justify-content-between p-4 p-lg-0 "
    >
      <img src={contact} className="img-fluid d-lg-block d-none" alt="" />
      <img
        src={contact}
        className="img-fluid w-100 d-lg-none d-md-block d-none"
        alt=""
      />
      <div className="mx-auto p-4">
        <h1 className="font text-center mb-4">Contact</h1>
        <div className="mx-auto">
          <form onSubmit={handleSumbit}>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
              <div className="mt-4">
                {" "}
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mt-4">
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Write something here..."
                ></textarea>
                <button className="button w-100 mt-4" type="submit">
                  <span className="me-1 fs-6">
                    <FiSend></FiSend>
                  </span>
                  Send{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
