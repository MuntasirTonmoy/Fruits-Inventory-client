import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../../utilities/Loading";

const MyItems = () => {
  const navigate = useNavigate();
  const { email } = useParams();

  const [user] = useAuthState(auth);
  const userEmail = user?.email;
  const [myItems, setMyItems] = useState([]);
  const [myItemsLoading, setMyItemsLoading] = useState(true);

  useEffect(() => {
    if (email !== userEmail) {
      navigate(`/`);
    }
  }, [userEmail, email]);

  useEffect(() => {
    fetch(`https://precious-red-bedclothes.cyclic.app/myitems/${userEmail}`)
      .then(res => res.json())
      .then(data => {
        setMyItems(data);
        setMyItemsLoading(false);
      });
  }, [userEmail]);

  const handleDeleteMyItems = id => {
    const confirm = window.confirm(
      "Are you sure you want to delete this item? "
    );
    if (confirm) {
      const url = `https://precious-red-bedclothes.cyclic.app/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remainingItems = myItems.filter(fruit => fruit._id !== id);
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
      {myItemsLoading ? (
        <Loading />
      ) : (
        <Table className="w-75 mx-auto" striped bordered>
          <thead>
            <tr className="text-center">
              <th className="fs-5">All Items</th>
              <th className="fs-5 d-lg-table-cell d-none">Quantity</th>
              <th className="fs-5 d-lg-table-cell d-none">Delivered</th>
              <th className="fs-5">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {myItems?.length === 0 ? (
              <tr className="text-center">
                <td>Empty</td>
                <td>Empty</td>
                <td>Empty</td>
                <td>Empty</td>
              </tr>
            ) : (
              <>
                {myItems?.map(myItem => {
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
              </>
            )}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default MyItems;
