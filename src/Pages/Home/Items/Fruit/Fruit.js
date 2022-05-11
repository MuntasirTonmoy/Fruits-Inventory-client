import React from "react";
import { Card } from "react-bootstrap";
import { BiRefresh } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

const Fruit = ({ fruit }) => {
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="item">
        <Card>
          <Card.Img
            variant="top"
            style={{ height: "375px" }}
            src={fruit.picture}
            className="img-fluid"
          />
          <Card.Body>
            <Card.Title className="fw-bold">{fruit.name}</Card.Title>

            <div>
              <p className="my-2">{fruit.description}</p>
              <p className="my-2">Price: ${fruit.price}</p>
              <p className="my-2">Quantity: {fruit.quantity}</p>
              <p className="mt-2 mb-0">Supplier: {fruit.supplier}</p>
            </div>
          </Card.Body>
          <Card.Footer
            onClick={() => navigate(`/inventory/${fruit._id}?from=inventory`)}
            className="button"
          >
            <span className="fs-5 me-1">
              <BiRefresh></BiRefresh>
            </span>
            Update items{" "}
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Fruit;
