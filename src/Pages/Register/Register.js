import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name?.value;
    const email = event.target.email?.value;
    const password = event.target.password?.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  const [updateProfile] = useUpdateProfile(auth);

  const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  if (emailLoading || googleLoading) {
    <div
      style={{ height: "85vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="spinner-grow text-danger me-2" role="status"></div>
      <div className="spinner-grow text-warning me-2" role="status"></div>
      <div className="spinner-grow text-success" role="status"></div>
    </div>;
  }

  useEffect(() => {
    if (googleUser) {
      navigate("/");
    }
  }, [googleUser]);

  useEffect(() => {
    if (emailUser) {
      navigate("/");
    }
  }, [emailUser]);

  if (googleError) {
    toast.error(googleError.message, {
      toastId: "error1",
    });
  }

  if (emailError) {
    toast.error(emailError.message, {
      toastId: "error1",
    });
  }

  return (
    <div className="container">
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <div className="w-50 mx-auto text-center mt-5">
        <h2 className="text-uppercase">Register</h2>
      </div>
      <Form className="w-50 mx-auto mt-4" onSubmit={handleSignUp}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <input
          type="submit"
          value="REGISTER"
          className=" w-100 px-5 mb-lg-4 px-lg-3 mb-4 mt-3 mx-auto mb-lg-0 button me-lg-4  background text-white round text-uppercase"
        ></input>
      </Form>
      <p className="w-50 mx-auto">
        Already have an account?{" "}
        <span
          style={{ cursor: "pointer", color: "#FB8332" }}
          onClick={() => navigate("/login")}
          className="fw-bolder"
        >
          Log in
        </span>
      </p>
      <div className="d-lg-block d-none">
        <div className="text-center w-50 mx-auto d-flex align-items-center justify-content-between">
          <div
            style={{ width: "37%", height: "0.5px", backgroundColor: "gray" }}
          ></div>
          <div className="mx-1"> or Continue with </div>
          <div
            style={{ width: "37%", height: "0.5px", backgroundColor: "gray" }}
          ></div>
        </div>
      </div>
      <div className="d-lg-none d-block">
        <div className="text-center w-50 mx-auto d-flex align-items-center justify-content-between">
          <div
            style={{ width: "38%", height: "0.5px", backgroundColor: "gray" }}
          ></div>
          <div className=""> or </div>
          <div
            style={{ width: "38%", height: "0.5px", backgroundColor: "gray" }}
          ></div>
        </div>
      </div>
      <div className="w-50 mx-auto mb-lg-4">
        <p className="text-center m-0"></p>
        <button
          onClick={() => signInWithGoogle()}
          className="w-100 mt-lg-4 px-5 px-lg-3 my-3 mx-auto my-lg-0 button-outline me-lg-4 text-uppercase bg-gradient"
        >
          <div className="d-flex align-items-center justify-content-center gap-lg-2 gap-2">
            <p className="m-0 pb-1">
              <FcGoogle></FcGoogle>
            </p>{" "}
            <p className="m-0">Google</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Register;
