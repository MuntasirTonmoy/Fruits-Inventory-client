import React, { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFileCheck, BsFileEarmark } from "react-icons/bs";
import { MdAddCircleOutline } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (!user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  const handleAddItem = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const picture = event.target.picture.value;
    const description = event.target.description.value;
    const supplier = event.target.supplier.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const delivered = 0;
    const item = {
      name,
      email,
      picture,
      description,
      supplier,
      price,
      quantity,
      delivered,
    };

    fetch(`https://polar-lowlands-01561.herokuapp.com/inventory`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          toast.success("Item added successfully", {
            toastId: "success1",
          });
          event.target.reset();
        }
      });
  };

  return (
    <div className="container w-75 mx-auto bg-light pt-lg-3 pb-lg-5 my-lg-5">
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <h1 className="text-center mt-5">Add New Item</h1>
      <p className="text-center">
        <Link style={{ textDecoration: "none" }} to={`/myitems/${email}`}>
          <span className="me-3  text-uppercase primary-color">
            <BsFileEarmark></BsFileEarmark> my items
          </span>
        </Link>
        |
        <Link style={{ textDecoration: "none" }} to="/manageinventory">
          <span className="ms-3 text-uppercase primary-color">
            <BsFileCheck></BsFileCheck> All Items
          </span>
        </Link>
      </p>
      <Form onSubmit={handleAddItem} className="w-75 mx-auto">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter item name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Picture</Form.Label>
          <Form.Control
            name="picture"
            type="text"
            placeholder="Enter URL"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="Enter description"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Supplier</Form.Label>
          <Form.Control
            name="supplier"
            type="text"
            placeholder="Enter supplier name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            min="0"
            placeholder="Enter amount"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            name="quantity"
            type="number"
            min="0"
            placeholder="Enter quantity"
            required
          />
        </Form.Group>

        <button
          type="submit"
          className=" w-100 px-5 mb-lg-4 mt-4 px-lg-3 mb-4  mx-auto mb-lg-0 button me-lg-4  background text-white round  bg-gradient"
        >
          Add
          <span className="ms-2">
            <MdAddCircleOutline></MdAddCircleOutline>
          </span>
        </button>
      </Form>
    </div>
  );
};

export default AddItem;
