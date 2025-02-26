import React, { useState } from "react";

export default function StudentTable({ students, handleEdit, handleDelete }) {
    const [searchInputValue, setSearchInputValue] = useState("");

    const filteredStudents = students.filter((student) =>
        `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    return (
        <div>
            <input 
                type="text" placeholder="Search Students" className="form-control mb-3"
                value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} 
            />
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Physics</th>
                        <th>Chemistry</th>
                        <th>Math</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student, index) => (
                        <tr key={index}>
                            <td>{student.firstName} {student.lastName}</td>
                            <td>{student.age}</td>
                            <td>{student.phyMarks}</td>
                            <td>{student.chemMarks}</td>
                            <td>{student.mathMarks}</td>
                            <td>
                                <button className="btn btn-primary m-2" 
                                onClick={() => handleEdit(index)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger m-2" 
                                onClick={() => handleDelete(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
