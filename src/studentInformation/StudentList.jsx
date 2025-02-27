import React, {useState} from 'react'

export default function StudentList({ students, handleEdit, handleDelete }) {
    const [searchInputValue, setSearchInputValue] = useState("");

    const filteredStudents = students.filter((student) =>
        `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    return (
        <>
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
                                <button className="btn btn-sm btn-primary"
                                    onClick={() => handleEdit(index)}>
                                    E
                                </button>
                                <button className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(index)}>
                                    D
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
