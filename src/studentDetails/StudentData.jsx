import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';

export default function StudentData() {
    const [students, setStudentDetails] = useState([
        { firstName: "Omshree", lastName: "Kenjale", age: 20, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Yash", lastName: "Kenjale", age: 15, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Sneha", lastName: "Kenjale", age: 25, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Mansi", lastName: "Udawant", age: 19, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Prajakta", lastName: "Joshi", age: 18, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Vrushti", lastName: "Thakkar", age: 17, phyMarks: 75, chemMarks: 90, mathMarks: 80 }
    ]);

    const [inputValue, setInputValue] = useState({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });

    const addStudentDetails = () => {
        setStudentDetails(prevStudents => [...prevStudents, inputValue]);
        setInputValue({ firstName: "", lastName: "", age: "", phyMarks: "", chemMarks: "", mathMarks: "" });
    };

    return (
        <>
            <div className='container-fluid row'>
                <h3 className='p-3 text-center fw-bold text-decoration-underline'>STUDENTS DETAILS</h3>

                <div className='col-6'>
                    <StudentForm
                        addStudentDetails={addStudentDetails}
                        setInputValue={setInputValue}
                    />
                </div>

                <div className='col-6'>
                    <StudentTable students={students} />
                </div>
            </div>
        </>
    );
}
