import React from "react";
import { Card } from "react-bootstrap";

const Fruit = ({ fruit }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="item">
        <Card>
          <Card.Img variant="top" src={fruit.picture} className="img-fluid" />
          <Card.Body>
            <Card.Title className=" fw-bold">{fruit.name}</Card.Title>

            <div>
              <p className="my-2">{fruit.description}</p>
              <p className="my-2">Price: ${fruit.price}</p>
              <p className="my-2">Quantity: {fruit.quantity}</p>
              <p className="mt-2 mb-0">Supplier: {fruit.supplier}</p>
            </div>
          </Card.Body>
          <Card.Footer className="bg-transparent ">
            <button className="button w-100 ">Update items</button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default Fruit;
