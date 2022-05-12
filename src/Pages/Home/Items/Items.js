import React from "react";
import useItems from "../../../hooks/useItems";
import useMyItems from "../../../hooks/useMyItems";
import Fruit from "./Fruit/Fruit";

const Items = () => {
  const { fruits } = useItems();
  const { myItems } = useMyItems();
  const allItems = [...fruits, ...myItems];

  const sixItems = allItems.slice(0, 6);

  return (
    <div className="container my-5">
      {allItems.length === 0 && (
        <div
          style={{ height: "85vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="spinner-grow text-danger me-2" role="status"></div>
          <div className="spinner-grow text-warning me-2" role="status"></div>
          <div className="spinner-grow text-success" role="status"></div>
        </div>
      )}
      <h1 className="text-center font mb-4">Inventory items</h1>
      <div className="row p-0 g-4">
        {sixItems.map((fruit) => (
          <Fruit key={fruit._id} fruit={fruit}></Fruit>
        ))}
      </div>
    </div>
  );
};

export default Items;
