import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return (
      <div
        style={{ height: "85vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="spinner-grow text-danger me-2" role="status"></div>
        <div className="spinner-grow text-warning me-2" role="status"></div>
        <div className="spinner-grow text-success" role="status"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
