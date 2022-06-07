import { useEffect, useState } from "react";

const useItems = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return { fruits, setFruits };
};

export default useItems;
