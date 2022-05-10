import React from "react";
import { Table } from "react-bootstrap";
import useMyItems from "../../hooks/useMyItems";
import { RiDeleteBinLine } from "react-icons/ri";

const MyItems = () => {
  const { myItems, setMyItems } = useMyItems();
  const handleDeleteMyItems = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item? "
    );
    if (confirm) {
      const url = `http://localhost:5000/myitems/${id}`;
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
    <div className="container my-5">
      <h2 className="text-center primary-color font bg-light p-3 w-75 mx-auto mb-0">
        My Items
      </h2>
      <Table className="w-75 mx-auto" striped bordered>
        <thead>
          <tr className="text-center">
            <th className="fs-5" colSpan={2}>
              All Items
            </th>
            <th className="fs-5 d-lg-table-cell d-none">Quantity</th>
            <th className="fs-5 d-lg-table-cell d-none">Delivered</th>
            <th className="fs-5">Delete</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {myItems.map((myItem) => {
            return (
              <tr key={myItem._id}>
                <td colSpan={2} className="fs-5">
                  {myItem.name}
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

export default MyItems;
