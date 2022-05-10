import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useMyItems = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
  const [myItems, setMyItems] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/myitems?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyItems(data));
    setIsLoading(false);
  }, [user]);
  return { myItems, setMyItems, loading, setIsLoading };
};

export default useMyItems;
