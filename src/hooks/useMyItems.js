import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.init";

const useMyItems = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const [myItems, setMyItems] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getItems = async () => {
      try {
        const email = user.email;
        const url = `http://localhost:5000/myitems?email=${email}`;
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setMyItems(data);
      } catch (error) {
        if (error) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [user]);

  return { myItems, setMyItems, loading, setIsLoading };
};

export default useMyItems;
