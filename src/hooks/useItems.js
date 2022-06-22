import { useEffect, useState } from "react";

const useItems = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://polar-lowlands-01561.herokuapp.com/fruits")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setFruits(data);
          setLoading(false);
        } else {
          setLoading(true);
        }
      });
  }, [loading]);
  return { fruits, setFruits, loading };
};

export default useItems;
