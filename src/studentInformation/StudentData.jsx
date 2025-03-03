import React, { useState } from "react";
import StudentAdd from "./StudentAdd";
import StudentUpdate from "./StudentUpdate";
import StudentList from "./StudentList";

export default function StudentData() {
    const [students, setStudentDetails] = useState([
        { roll:1, firstName: "Omshree", lastName: "Kenjale", age: 20, phyMarks: 100, chemMarks: 100, mathMarks: 77 },
        { roll:2, firstName: "Yash", lastName: "Seth", age: 15, phyMarks: 70, chemMarks: 90, mathMarks: 88 },
        { roll:3, firstName: "Sneha", lastName: "Malhotra", age: 25, phyMarks: 5, chemMarks: 0, mathMarks: 10 },
        { roll:4, firstName: "Mansi", lastName: "Udawant", age: 19, phyMarks: 11, chemMarks: 70, mathMarks: 40 },
        { roll:5, firstName: "Prajakta", lastName: "Joshi", age: 18, phyMarks: 85, chemMarks: 85, mathMarks: 22 },
    ]);
    const [inputValue, setInputValue] = useState({ roll: "", firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
    const [editIndex, setEditIndex] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleAddStudent = () => {
        setStudentDetails([...students, inputValue]);
        setInputValue({ roll: "", firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
    };

    const handleUpdateStudent = () => {
        if (editIndex !== null) {
            const updatedStudents = [...students];
            updatedStudents[editIndex] = inputValue;
            setStudentDetails(updatedStudents);
            setEditIndex(null);
            setInputValue({ roll: "", firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
            setIsEditing(false);
        }
    };

    const cancelUpdateStudent = () => {
        setEditIndex(null);
        setInputValue({ roll: "", firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
        setIsEditing(false);
    };

    const handleEdit = (index) => {
        setIsEditing(true);
        setInputValue(students[index]);
        setEditIndex(index);
    };

    const handleDelete = (index) => {
        const updatedStudents = students.filter((_, i) => i !== index);
        setStudentDetails(updatedStudents); // Update state to trigger re-render
    };

    const handleChange = (e) => {
        const { name } = e.target;
        setInputValue(
            { ...inputValue, [name]: e.target.value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(students);
    };

    //   const handleSubmit = (e, formName) => {
    //     e.preventDefault();
    //     if (formName === "add") {
    //         handleAddStudent();
    //         console.log(students);
    //     }
    //     else {
    //         handleUpdateStudent();
    //         console.log(students);
    //     } 
    //   };

    return (
        <div className="container">
            <h1 className="text-center">Student Information</h1>
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6">
                    {isEditing &&
                        <p style={{ border: "2px solid green" }} className="p-2">
                            UPDATE STUDENT FORM
                        </p>
                    }
                    {isEditing ?
                        (<StudentUpdate
                            inputValue={inputValue}
                            handleUpdateStudent={handleUpdateStudent}
                            cancelUpdateStudent={cancelUpdateStudent}
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                        />) : (<StudentAdd
                            inputValue={inputValue}
                            handleAddStudent={handleAddStudent}
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                        // formName="add"
                        />)
                    }
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                    <StudentList
                        students={students}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete} />
                </div>
            </div>
        </div>
    );
}

