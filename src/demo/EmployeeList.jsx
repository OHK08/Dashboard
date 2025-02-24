import React from "react";

const EmployeeList = ({ employeeList }) => {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employeeList.map((employee, index) => (
          <li key={index}>{employee}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;