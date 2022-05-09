import React, { useState } from "react";
import { FaShippingFast } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useItems from "../../hooks/useItems";

const Inventory = () => {
  const { id } = useParams();
  const [fruits] = useItems();
  const selectedItem = fruits.find((fruit) => fruit._id === id);
  const [quantity, setQuantity] = useState(50);
  const [delivered, setDelivered] = useState(0);

  const handleDelivery = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
      setDelivered((prev) => prev + 1);
    }
  };
  let totalDelivered = delivered;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6 col-12 bg-light">
          <div className="row m-0">
            <div className="col-lg-6 col-12 ps-4 ps-lg-0 ms-lg-0">
              <img
                src={selectedItem?.picture}
                style={{ height: "350px" }}
                className="img-fluid mt-lg-4 d-none d-lg-block  ps-lg-3 pb-lg-1"
                alt=""
              />
              <img
                src={selectedItem?.picture}
                className="img-fluid mt-lg-4  ps-lg-3 pb-lg-1 d-block d-lg-none"
                alt=""
              />
            </div>
            <div className="col-lg-6 col-12 ms-4 ms-lg-0 p-4 p-lg-3">
              <h2 className="font">{selectedItem?.name}</h2>
              <small className="my-3">ID: {selectedItem?._id}</small>
              <p className="my-3 fs-5">{selectedItem?.description}</p>
              <p className="mt-3 fs-5">Supplier: {selectedItem?.supplier}</p>
              <p className="my-3 fs-5">
                Price:
                <span className="text-success"> ${selectedItem?.price}</span>
              </p>
              <p className="my-3 fs-5">Quantity: {quantity}</p>
              <p className="mt-3 fs-5">Sold: {totalDelivered}</p>
              <button onClick={handleDelivery} className="button w-100">
                Deliver
                <span className="ms-2">
                  <FaShippingFast></FaShippingFast>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6">form</div>
      </div>
    </div>
  );
};

export default Inventory;
