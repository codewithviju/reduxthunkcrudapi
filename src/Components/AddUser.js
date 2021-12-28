import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../Redux/Actions";
import { useNavigate } from "react-router-dom";
const AddUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addUsers(input));
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Contact</label>
          <input
            type="text"
            name="contact"
            id="contact"
            className="form-control"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Add User"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
