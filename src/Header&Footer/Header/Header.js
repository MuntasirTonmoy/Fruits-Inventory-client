import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { GiRaspberry } from "react-icons/gi";
import CustomLink from "../../utilities/CustomLink";
import { HashLink } from "react-router-hash-link";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="px-lg-5 px-3"
    >
      <Navbar.Brand className="brand me-lg-4" as={Link} to="/">
        <GiRaspberry className="fs-4"></GiRaspberry> Fruits Inventory
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link
            className="mx-auto my-2 my-lg-0 me-lg-2"
            as={CustomLink}
            to="/blogs"
          >
            Blogs
          </Nav.Link>
          <Nav.Link
            as={HashLink}
            smooth
            to="/home#contact"
            className="mx-auto my-2 my-lg-0 me-lg-2"
          >
            About
          </Nav.Link>
          <Nav.Link
            as={HashLink}
            smooth
            to="/home#contact"
            className="mx-auto my-2 my-lg-0 me-lg-2"
          >
            Contact
          </Nav.Link>
        </Nav>

        <Nav className="ms-auto align-items-center">
          {user ? (
            user.photoURL ? (
              <img
                src={user.photoURL}
                className="mx-auto my-2 my-lg-0 me-lg-3"
                width="35px"
                height="35px"
                alt="user"
                style={{ borderRadius: "50%" }}
              ></img>
            ) : (
              <span className="text-white mx-auto my-2 my-lg-0 me-lg-3 fs-3">
                <FaRegUserCircle></FaRegUserCircle>
              </span>
            )
          ) : (
            <Nav.Link
              className="text-uppercase mx-auto my-2 my-lg-0 me-lg-3"
              as={CustomLink}
              to="/register"
            >
              <button className="button">Register</button>
            </Nav.Link>
          )}

          {user ? (
            <Nav.Link className="text-uppercase mx-auto my-2 my-lg-0 me-lg-3">
              <button onClick={handleSignout} className="button-outline">
                Log out
              </button>
            </Nav.Link>
          ) : (
            <Nav.Link
              className="text-uppercase mx-auto my-2 my-lg-0 me-lg-3"
              as={CustomLink}
              to="/login"
            >
              <button className="button-outline">Log in</button>
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
