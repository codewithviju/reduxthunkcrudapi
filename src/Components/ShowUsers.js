import React, { useEffect } from "react";

import { deleteUser, loadUsers } from "../Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const ShowUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const { users } = useSelector((state) => state.data);

  // Delete Users

  const handleDelete = (id) => {
    if (window.confirm("Are You Sure You Want To Delete?")) {
      dispatch(deleteUser(id));
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <button onClick={() => navigate("/add")} className="btn btn-primary">
          Add Users
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ADDRESS</th>
              <th>EMAIL</th>
              <th>CONTACT</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((items, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.address}</td>
                    <td>{items.email}</td>
                    <td>{items.contact}</td>
                    <td>
                      <Link to={`edit/${items.id}`}>
                        <input
                          type="button"
                          value="Edit"
                          className="btn btn-primary"
                        />
                      </Link>
                      <input
                        type="button"
                        value="DELETE"
                        className="btn btn-danger"
                        onClick={() => handleDelete(items.id)}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowUsers;
