import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useMyItems = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const email = user.email;
  const [myItems, setMyItems] = useState([]);
  const [loading, setIsLoading] = useState(false);
  useEffect(() => {
    try {
      setIsLoading(true);
      fetch(`http://localhost:5000/myitems?email=${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setMyItems(data));
      setIsLoading(false);
    } catch (error) {
      if (error.response.status === 403 || error.response.status === 403) {
        signOut(auth);
        navigate("/login");
      }
    }
  }, [user]);
  return { myItems, setMyItems, loading, setIsLoading };
};

export default useMyItems;
