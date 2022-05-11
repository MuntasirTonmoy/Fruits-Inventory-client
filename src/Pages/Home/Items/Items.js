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
      <h1 className="text-center font mb-4">Available Fruits</h1>
      <div className="row p-0 g-4">
        {sixItems.map((fruit) => (
          <Fruit key={fruit._id} fruit={fruit}></Fruit>
        ))}
      </div>
    </div>
  );
};

export default Items;
