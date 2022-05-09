import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header&Footer/Header/Header";
import Footer from "./Header&Footer/Footer/Footer";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/LogIn/Login";
import RequireAuth from "./utilities/RequireAuth/RequireAuth";
import Register from "./Pages/Register/Register";
import Error404 from "./Pages/Error404/Error404";
import Blogs from "./Pages/Blogs/Blogs";
import Inventory from "./Pages/Inventory/Inventory";
import "react-toastify/dist/ReactToastify.css";
import PasswordReset from "./Pages/PasswordReset/PasswordReset";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/resetPassword"
          element={<PasswordReset></PasswordReset>}
        ></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageinventory"
          element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }
        ></Route>

        <Route path="/*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
