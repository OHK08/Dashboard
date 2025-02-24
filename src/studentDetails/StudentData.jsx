import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

export default function StudentData() {
    // Array of students
    const [students, setStudentDetails] = useState([
        { firstName: "Omshree", lastName: "Kenjale", age: 20, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Yash", lastName: "Seth", age: 15, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Sneha", lastName: "Malhotra", age: 25, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Mansi", lastName: "Udawant", age: 19, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Prajakta", lastName: "Joshi", age: 18, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Vrushti", lastName: "Thakkar", age: 17, phyMarks: 75, chemMarks: 90, mathMarks: 80 }
    ]);

    // State for form input values
    const [inputValue, setInputValue] = useState({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });

    // Search student
    const [searchInputValue, setSearchInputValue] = useState("");
    const searchStudentDetails = (e) => {
        setSearchInputValue(e.target.value);
    };

    // Filter students based on search input
    const filteredStudents = students.filter(student => 
        student.firstName.toLowerCase().includes(searchInputValue.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    // After clicking on an item in the table, fill the form with student details
    const handleRowClick = (student) => {
        setInputValue(student); // ✅ Updates the form fields
    };

    return (
        <>
            <div className='container-fluid row'>
                <h3 className='p-3 text-center fw-bold text-decoration-underline'>STUDENTS DETAILS</h3>

                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <StudentForm 
                        setStudentDetails={setStudentDetails}
                        inputValue={inputValue}  
                        setInputValue={setInputValue}
                    />
                </div>

                <div className='col-sm-6 col-md-6 col-lg-6'>
                    <StudentTable
                        filteredStudents={filteredStudents}
                        searchInputValue={searchInputValue}
                        searchStudentDetails={searchStudentDetails}
                        handleRowClick={handleRowClick}
                    />
                </div>
            </div>
        </>
    );
}
