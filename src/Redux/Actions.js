import * as types from "./actionTypes";
import axios from "axios";
export const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});

const userDeleted = () => ({
  type: types.DELETE_USERS,
});

const userAdded = () => ({
  type: types.ADD_USERS,
});

const userUpdated = () => ({
  type: types.UPDATE_USER,
});

const getUser = (user) => ({
  type: types.GET_SINGLE_USER,
  payload: user,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:5000/user")
      .then((resp) => {
        dispatch(getUsers(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
export const deleteUser = (id) => {
  return function (dispatch) {
    axios.delete(`http://localhost:5000/user/${id}`).then((resp) => {
      dispatch(userDeleted());
      dispatch(loadUsers());
    });
  };
};

export const addUsers = (user) => {
  return function (dispatch) {
    axios.post(`http://localhost:5000/user/`, user).then((resp) => {
      dispatch(userAdded());
      dispatch(loadUsers());
    });
  };
};

// For Update Data

export const getSingleUser = (id) => {
  return function (dispatch) {
    axios.get(`http://localhost:5000/user/${id}`).then((resp) => {
      dispatch(getUser(resp.data));
    });
  };
};

// For Update User

export const updateUser = (user, id) => {
  return function (dispatch) {
    axios.put(`http://localhost:5000/user/${id}`, user).then((resp) => {
      dispatch(userUpdated());
    });
  };
};
