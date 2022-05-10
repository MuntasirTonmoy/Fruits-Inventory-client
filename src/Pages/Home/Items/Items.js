import React, { useEffect, useState } from "react";
import useItems from "../../../hooks/useItems";
import Fruit from "./Fruit/Fruit";

const Items = () => {
  const { fruits } = useItems();
  const sixItems = fruits.slice(0, 6);
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
