import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FaShippingFast } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";

const Inventory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [state, setState] = useState(true);
  let current;

  const [delivered, setDelivered] = useState(0);
  useEffect(() => {
    fetch(`http://localhost:5000/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedItem(data);
      });
  }, []);

  const handleDelivery = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      setDelivered((prev) => prev + 1);
    }
  };

  const handleRestock = (event) => {
    event.preventDefault();
    const amount = parseInt(event.target.quantity.value);
    setQuantity(quantity + amount);
    event.target.reset();
  };

  useEffect(() => {
    const newQuantity = { quantity };
    console.log(newQuantity);
    fetch(`http://localhost:5000/inventory/${id}`, {
      method: "PUT",
      body: JSON.stringify(newQuantity),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [quantity]);

  return (
    <div className="container my-lg-5 py-lg-5 my-5">
      <div className="row">
        <div className="col-lg-6 col-12 bg-light">
          <div className="row m-0 pb-3">
            <div className="col-lg-6 col-12 ps-4 ps-lg-0 ms-lg-0">
              <img
                src={selectedItem?.picture}
                style={{ height: "390px" }}
                className="img-fluid mt-lg-4 d-none d-lg-block  ps-lg-3 pb-lg-1"
                alt=""
              />
              <img
                src={selectedItem?.picture}
                className="img-fluid mt-lg-4  ps-lg-3 pb-lg-1 d-block d-lg-none"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-12 ms-lg-0 p-4 p-lg-3">
              <h2 className="font">{selectedItem?.name}</h2>
              <small className="my-3">ID: {selectedItem?._id}</small>
              <p className="my-3 fs-5">{selectedItem?.description}</p>
              <p className="mt-3 fs-5">Supplier: {selectedItem?.supplier}</p>
              <p className="my-3 fs-5">
                Price:
                <span className="text-success"> ${selectedItem?.price}</span>
              </p>
              <p className="my-3 fs-5">Quantity: {quantity}</p>
              <p className="mt-3 fs-5">Delivered: {delivered}</p>
              <button onClick={handleDelivery} className="button w-100">
                Deliver
                <span className="ms-2">
                  <FaShippingFast></FaShippingFast>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-4 mt-lg-0">
          <div>
            <div className="bg-light rounded-3 py-5">
              <h2 className="font text-center">Restock {selectedItem?.name}</h2>
              <Form onSubmit={handleRestock} className="w-75 mx-auto mt-3">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    name="quantity"
                    type="text"
                    placeholder="Enter amount"
                    required
                  />
                </Form.Group>

                <button
                  type="submit"
                  className=" w-100 px-5 mb-lg-4 px-lg-3 mb-4  mx-auto mb-lg-0 button me-lg-4  background text-white round text-uppercase bg-gradient"
                >
                  Restock{" "}
                  <span className="ms-2">
                    <MdAddCircleOutline></MdAddCircleOutline>
                  </span>
                </button>
              </Form>
            </div>
            <button
              onClick={() => navigate("/manageinventory")}
              className=" button-outline  p-4 m  mt-4 fs-3 w-100"
            >
              Manage Inventory{" "}
              <BsCartCheckFill className="ms-2"></BsCartCheckFill>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
