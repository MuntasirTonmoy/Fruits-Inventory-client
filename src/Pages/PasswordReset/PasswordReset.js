import { async } from "@firebase/util";
import React from "react";
import { Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const PasswordReset = () => {
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    const email = event.target.email?.value;
    sendPasswordResetEmail(email);
  };

  if (error) {
    toast.error(error.message, {
      toastId: "error1",
    });
  }
  if (sending) {
    toast.success("Email sent. Please check your email.", {
      toastId: "error1",
    });
    setTimeout(() => {
      return navigate("/login");
    }, 4000);
  }

  return (
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      ></ToastContainer>
      <h2 className="w-50 mx-auto text-center mt-5 text-uppercase">
        Reset Password
      </h2>
      <Form className="w-50 mx-auto mt-4" onSubmit={handlePasswordReset}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <input
          type="submit"
          value="Reset Password"
          className=" w-100  mb-lg-4 px-lg-3 mb-4 mt-2 mx-auto mb-lg-0 btn me-lg-4 button text-white round text-uppercase bg-gradient"
        ></input>
      </Form>
    </div>
  );
};

export default PasswordReset;
