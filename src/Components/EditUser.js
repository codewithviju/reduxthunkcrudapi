import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleUser, updateUser } from "../Redux/Actions";
import { useSelector } from "react-redux";
const EditUser = () => {
  const [input, setInput] = useState({
    name: "",
    address: "",
    email: "",
    contact: "",
  });

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.data);
  //   console.log(user);

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setInput({ ...user });
    }
  }, [user]);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Submit The Form

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser(input, id));
    navigate("/");
  };
  return (
    <div>
      <div className="container">
        <h2>Edit User</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Id</label>
            <input
              type="text"
              name="id"
              id="name"
              className="form-control"
              value={id}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={input.name || ""}
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
              value={input.address || ""}
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
              value={input.email || ""}
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
              value={input.contact || ""}
              className="form-control"
              onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update User"
              className="btn btn-primary btn-block"
            />
          </div>
          <div className="form-group mt-3 center">
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Back To Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
