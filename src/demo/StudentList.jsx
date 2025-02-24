import React, { useState } from 'react';

const StudentList = () => {
    const [students] = useState([
        'Alice Johnson',
        'Bob Smith',
        'Charlie Brown',
        'David Williams',
        'Eve Davis',
        'Frank Miller',
        'Grace Wilson'
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredStudents = students.filter(student =>
        student.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h1>Student List</h1>
            <input
                type="text"
                placeholder="Search students"
                value={searchTerm}
                onChange={handleChange}
                className="form-control mb-3"
            />
            <ul className="list-group">
                {filteredStudents.map((student, index) => (
                    <li key={index} className="list-group-item">
                        {student}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
    