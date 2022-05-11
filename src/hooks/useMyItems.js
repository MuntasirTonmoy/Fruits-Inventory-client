import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
        const url = `https://polar-lowlands-01561.herokuapp.com/myitems?email=${email}`;
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setMyItems(data);
      } catch (error) {
        if (error.response.status === 403 || error.response.status === 401) {
          signOut(auth);
          navigate("/login");
          toast.error("Unauthorize Access", {
            toastId: "error1",
          });
        }
      }
    };
    getItems();
  }, [user]);

  return { myItems, setMyItems, loading, setIsLoading };
};

export default useMyItems;
