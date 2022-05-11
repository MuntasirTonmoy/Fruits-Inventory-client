import { useEffect, useState } from "react";

const useItems = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://polar-lowlands-01561.herokuapp.com/fruits")
      .then((res) => res.json())
      .then((data) => setFruits(data));
    setIsLoading(false);
  }, []);
  return { fruits, setFruits, loading, setIsLoading };
};

export default useItems;
