import React, { useState } from "react";
import StudentAdd from "./StudentAdd";
import StudentUpdate from "./StudentUpdate";
import StudentList from "./StudentList";

export default function StudentData() {
    const [students, setStudentDetails] = useState([
        { firstName: "Omshree", lastName: "Kenjale", age: 20, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Yash", lastName: "Seth", age: 15, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Sneha", lastName: "Malhotra", age: 25, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Mansi", lastName: "Udawant", age: 19, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Prajakta", lastName: "Joshi", age: 18, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
    ]);
    const [inputValue, setInputValue] = useState({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
    const [inputValueU, setInputValueU] = useState({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
    const [editIndex, setEditIndex] = useState(null);

    const handleAddStudent = (e) => {
        e.preventDefault();
        setStudentDetails([...students, inputValue]);
        setInputValue({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
    };

    const handleUpdateStudent = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const updatedStudents = [...students];
            updatedStudents[editIndex] = inputValueU;
            setStudentDetails(updatedStudents);
            setEditIndex(null);
            setInputValueU({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
        }
    };

    const handleEdit = (index) => {
        setInputValueU(students[index]);
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
                    <StudentAdd
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        handleAddStudent={handleAddStudent}
                    />
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <StudentUpdate
                        inputValueU={inputValueU}
                        setInputValueU={setInputValueU}
                        handleUpdateStudent={handleUpdateStudent} />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <StudentList 
                    students={students} 
                    handleEdit={handleEdit} 
                    handleDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
}

