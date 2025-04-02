// useReducer hook example 
// user information crud operations

import React, { useReducer, useState } from "react";

const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";

const userReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];

    case UPDATE_USER:
      return state.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );

    case DELETE_USER:
      return state.filter((user) => user.id !== action.payload);

    default:
      return state;
  }
};

const UserCrud = () => {
  const [users, dispatch] = useReducer(userReducer, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [userId, setUserId] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleAddUser = () => {
    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      mobile,
      dob,
      gender,
    };
    dispatch({ type: ADD_USER, payload: newUser });
    resetForm();
  };

  const handleUpdateUser = () => {
    const updatedUser = { id: userId, name, email, mobile, dob, gender };
    dispatch({ type: UPDATE_USER, payload: updatedUser });
    resetForm();
  };

  const handleDeleteUser = (id) => {
    dispatch({ type: DELETE_USER, payload: id });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMobile("");
    setDob("");
    setGender("");
    setUserId("");
    setIsEditing(false);
  };

  const handleEditClick = (user) => {
    setUserId(user.id);
    setName(user.name);
    setEmail(user.email);
    setMobile(user.mobile);
    setDob(user.dob);
    setGender(user.gender);
    setIsEditing(true);
  };

  return (
    <div className="container-fluid mt-4">
      <div className="row">
        {/* User Form */}
        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">User Management</h2>

            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                type="tel"
                className="form-control"
                placeholder="Mobile No."
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <input
                type="date"
                className="form-control"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Gender:</label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>

            {isEditing ? (
              <button className="btn btn-success w-100 mb-2" onClick={handleUpdateUser}>
                Update User
              </button>
            ) : (
              <button className="btn btn-primary w-100 mb-2" onClick={handleAddUser}>
                Add User
              </button>
            )}
            {isEditing && (
              <button className="btn btn-warning w-100" onClick={resetForm}>
                Cancel
              </button>
            )}
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
          <div className="card shadow-sm p-2">
            <h3 className="text-center">User List</h3>

            {users.length > 0 ? (
              <table className="table table-striped text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.mobile}</td>
                      <td>{user.dob}</td>
                      <td>{user.gender}</td>
                      <td>
                        <button className="btn btn-warning btn-sm me-2" onClick={() => handleEditClick(user)}>
                          Edit
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteUser(user.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center text-muted">No users found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCrud;
