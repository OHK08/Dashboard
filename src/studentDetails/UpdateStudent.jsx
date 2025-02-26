import React, { useState } from 'react';

export default function UpdateStudent(index, students, setStudentDetails, inputValue, setInputValue, setEditIndex) {
    if (index !== null) {
        const updatedStudents = [...students];
        updatedStudents[index] = inputValue;
        setStudentDetails(updatedStudents);
        setEditIndex(null);
    }
    setInputValue({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
}
