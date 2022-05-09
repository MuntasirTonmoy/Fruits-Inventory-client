import React from "react";
import { Table } from "react-bootstrap";
import useItems from "../../hooks/useItems";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ManageInventory = () => {
  const navigate = useNavigate();
  const [fruits, setFruits] = useItems();
  const handleDeleteUser = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item? "
    );
    if (confirm) {
      const url = `http://localhost:5000/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainings = fruits.filter((user) => user._id !== id);
            setFruits(remainings);
          }
        });
    }
  };
  return (
    <div className="container mt-lg-5">
      <div className="w-75 mx-auto">
        <button
          onClick={() => navigate("/additem")}
          className=" button-outline w-100 p-4 mb-5  mt-lg-2 mt-4 fs-3"
        >
          Add Item <AiOutlineFileAdd className="ms-2"></AiOutlineFileAdd>
        </button>
      </div>
      <h2 className="text-center font bg-light p-3 w-75 mx-auto mb-0">
        Manage Inventory
      </h2>
      <Table className="w-75 mx-auto" striped bordered>
        <thead>
          <tr>
            <th className="ps-5 fs-5" colSpan={2}>
              All Items
            </th>
            <th className="text-center fs-5">Manage</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit) => {
            return (
              <tr key={fruit._id}>
                <td colSpan={2} className="ps-5 fs-5">
                  {fruit.name}
                </td>
                <td className="w-25 text-center">
                  <button
                    onClick={() => handleDeleteUser(fruit._id)}
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
