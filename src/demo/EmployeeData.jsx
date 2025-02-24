import React, { useState } from "react";
import AddEmployee from "./AddEmployee";
import EmployeeList from "./EmployeeList";

const EmployeeData = () => {
  const [employeeList, setEmployeeList] = useState([""]);

  const addEmployee = (name) => {
    setEmployeeList([...employeeList, name]);
  };

  return (
    <div>
      <h1>Employee Management</h1>
      <AddEmployee addEmployee={addEmployee} />
      <EmployeeList employeeList={employeeList} />
    </div>
  );
};

export default EmployeeData;