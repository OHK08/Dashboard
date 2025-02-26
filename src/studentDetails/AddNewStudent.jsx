import React from 'react'

export default function AddNewStudent( students, setStudentDetails, inputValue, setInputValue) {
  setStudentDetails([...students, inputValue]);
  setInputValue({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
}

