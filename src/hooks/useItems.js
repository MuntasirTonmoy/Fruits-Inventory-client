import { useEffect, useState } from "react";

const useItems = () => {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://polar-lowlands-01561.herokuapp.com/fruits")
      .then((res) => {
        if (res.status === 404) {
          window.location.reload();
        }
        return res.json();
      })
      .then((data) => {
        setFruits(data);
        setLoading(false);
      });
  }, [loading]);
  return { fruits, setFruits, loading };
};

export default useItems;
