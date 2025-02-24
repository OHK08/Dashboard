import React, { useState } from 'react';

export default function FilterArray() {
    const [students] = useState([
        { firstName: "Omshree", lastName: "Kenjale", age: 20, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Yash", lastName: "Seth", age: 15, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Sneha", lastName: "Malhotra", age: 25, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Mansi", lastName: "Udawant", age: 19, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Prajakta", lastName: "Joshi", age: 18, phyMarks: 75, chemMarks: 90, mathMarks: 80 },
        { firstName: "Vrushti", lastName: "Thakkar", age: 17, phyMarks: 75, chemMarks: 90, mathMarks: 80 }
    ]);

    const [searchInputValue, setSearchInputValue] = useState("");

    const searchStudentDetails = (e) => {
        setSearchInputValue(e.target.value);
    };
    
    const filteredStudents = students.filter(student => 
        student.firstName.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    return (
        <>
            <input 
                type="text" 
                placeholder='Search student' 
                value={searchInputValue}
                onChange={searchStudentDetails}
            />
            <ul className='list-group'>
                {filteredStudents.map((student, index) => (
                    <li key={index} className='list-group-item'>
                        {student.firstName} {student.lastName} (Age: {student.age})
                    </li>
                ))}
            </ul>
        </>
    );
}
