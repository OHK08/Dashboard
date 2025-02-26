import React, { useState } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTable";

export default function StudentInformation() {
    const [students, setStudentDetails] = useState([
        { firstName: "Omshree", lastName: "Kenjale", age: 20, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Yash", lastName: "Seth", age: 15, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Sneha", lastName: "Malhotra", age: 25, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Mansi", lastName: "Udawant", age: 19, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Prajakta", lastName: "Joshi", age: 18, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
    ]);
    const [inputValue, setInputValue] = useState({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
    const [editIndex, setEditIndex] = useState(null);

    const handleAddStudent = (e) => {
        e.preventDefault();
        setStudentDetails([...students, inputValue]);
        setInputValue({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
    };

    const handleUpdateStudent = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            // students[editIndex] = inputValue;
            // setStudentDetails(students);
            const updatedStudents = [...students];
            updatedStudents[editIndex] = inputValue;
            setStudentDetails(updatedStudents);
            setEditIndex(null);
            setInputValue({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
        }
    };

    const handleEdit = (index) => {
        setInputValue(students[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        setStudentDetails(students.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1 className="text-center">Student Information</h1>
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <StudentForm 
                        inputValue={inputValue} 
                        setInputValue={setInputValue} 
                        handleAddStudent={handleAddStudent} 
                        handleUpdateStudent={handleUpdateStudent} 
                    />
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <StudentTable students={students} handleEdit={handleEdit} handleDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
}

