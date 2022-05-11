import { useEffect, useState } from "react";

const useItems = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    fetch("https://polar-lowlands-01561.herokuapp.com/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return { fruits, setFruits };
};

export default useItems;
