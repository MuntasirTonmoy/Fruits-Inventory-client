import React from "react";
import { Form } from "react-bootstrap";
import { MdAddCircleOutline } from "react-icons/md";

const AddItem = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const picture = event.target.picture.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const item = { name, picture, description, price, quantity };
    fetch("http://localhost:5000/inventory", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        event.target.reset();
      });
  };
  return (
    <div className="container w-75 mx-auto bg-light pt-lg-3 pb-lg-4 my-lg-5">
      <h1 className="text-center mt-5">Add an item</h1>
      <Form onSubmit={handleAddUser} className="w-75 mx-auto">
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
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            type="text"
            placeholder="Enter amount"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            name="quantity"
            type="text"
            placeholder="Enter amount"
            required
          />
        </Form.Group>

        <button
          type="submit"
          className=" w-100 px-5 mb-lg-4 mt-2 px-lg-3 mb-4  mx-auto mb-lg-0 button me-lg-4  background text-white round text-uppercase bg-gradient"
        >
          Add Item{" "}
          <span className="ms-2">
            <MdAddCircleOutline></MdAddCircleOutline>
          </span>
        </button>
      </Form>
    </div>
  );
};

export default AddItem;
