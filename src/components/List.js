import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../App.css";

const List = () => {
  const list = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };
  const editUser = (id) =>{
      navigate(`/${id}`)
  }

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Delete</th>
          <th>Edit</th> 
        </tr>
      </thead>
      <tbody>
        {list.map((listItem, id) => {
          return (
            <tr key={id}>
              <td>{listItem.firstName}</td>
              <td>{listItem.lastName}</td>
              <td>{listItem.phone}</td>
              <td>{listItem.email}</td>
              <td>{listItem.msg}</td>
              <td>
                <button onClick={() => deleteUser(id)} > Delete</button>
              </td>
              <td>
                <button onClick={() => editUser(id)} >Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default List;