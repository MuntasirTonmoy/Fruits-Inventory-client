import { useEffect, useState } from "react";

const useMyItems = () => {
  const [myItems, setMyItems] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/myItems")
      .then((res) => res.json())
      .then((data) => setMyItems(data));
    setIsLoading(false);
  }, []);
  return { myItems, setMyItems, loading, setIsLoading };
};

export default useMyItems;
