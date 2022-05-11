import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useItems from "../../hooks/useItems";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineFileAdd } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useMyItems from "../../hooks/useMyItems";

const ManageInventory = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (!user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  const { fruits, setFruits } = useItems();
  const { myItems, setMyItems } = useMyItems();

  const handleDeleteFruits = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item? "
    );
    if (confirm) {
      const url = `https://polar-lowlands-01561.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingFruits = fruits.filter((user) => user._id !== id);
            setFruits(remainingFruits);
          }
        });
    }
  };
  const handleDeleteMyItems = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item? "
    );
    if (confirm) {
      const url = `https://polar-lowlands-01561.herokuapp.com/myitems/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingItems = myItems.filter((user) => user._id !== id);
            setMyItems(remainingItems);
          }
        });
    }
  };
  return (
    <div className="container mt-lg-5">
      {fruits.length === 0 && (
        <div
          style={{ height: "85vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="spinner-grow text-danger me-2" role="status"></div>
          <div className="spinner-grow text-warning me-2" role="status"></div>
          <div className="spinner-grow text-success" role="status"></div>
        </div>
      )}
      <div className="w-75 mx-auto">
        <button
          onClick={() => navigate("/additem")}
          className=" button-outline w-100 p-4 mb-5  mt-lg-2 mt-5 fs-3"
        >
          Add Item <AiOutlineFileAdd className="ms-2"></AiOutlineFileAdd>
        </button>
      </div>
      <h2 className="text-center font bg-light p-3 w-75 mx-auto mb-0">
        Manage All Items
      </h2>
      <Table className="w-75 mx-auto" striped bordered>
        <thead>
          <tr className="text-center">
            <th className="fs-5 ">All Items</th>
            <th className="fs-5 d-lg-table-cell d-none">Quantity</th>
            <th className="fs-5 d-lg-table-cell d-none">Delivered</th>
            <th className="fs-5">Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {fruits.map((fruit) => {
            return (
              <tr key={fruit._id}>
                <td className="fs-5">
                  <p className="d-flex justify-content-between align-items-center">
                    {fruit.name}{" "}
                    <GrUpdate
                      onClick={() => navigate(`/inventory/${fruit._id}`)}
                      className="me-lg-4"
                    ></GrUpdate>
                  </p>
                </td>
                <td className="fs-5 d-lg-table-cell d-none">
                  {fruit.quantity}
                </td>
                <td className="fs-5 d-lg-table-cell d-none">
                  {fruit.delivered}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteFruits(fruit._id)}
                    className="border-0 bg-transparent text-danger fs-4"
                  >
                    <RiDeleteBinLine></RiDeleteBinLine>
                  </button>
                </td>
              </tr>
            );
          })}
          {myItems.map((myItem) => {
            return (
              <tr key={myItem._id}>
                <td className="fs-5">
                  <p className="d-flex justify-content-between align-items-center">
                    {myItem.name}{" "}
                    <GrUpdate
                      onClick={() => navigate(`/inventory/${myItem._id}`)}
                      className="me-lg-4"
                    ></GrUpdate>
                  </p>
                </td>
                <td className="fs-5 d-lg-table-cell d-none">
                  {myItem.quantity}
                </td>
                <td className="fs-5 d-lg-table-cell d-none">
                  {myItem.delivered}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteMyItems(myItem._id)}
                    className="border-0 bg-transparent text-danger fs-4"
                  >
                    <RiDeleteBinLine></RiDeleteBinLine>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageInventory;
