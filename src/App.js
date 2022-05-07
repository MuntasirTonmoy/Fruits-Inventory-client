import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header&Footer/Header/Header";
import Footer from "./Header&Footer/Footer/Footer";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/LogIn/Login";
import Register from "./Pages/Register/Register";
import Error404 from "./Pages/Error404/Error404";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
