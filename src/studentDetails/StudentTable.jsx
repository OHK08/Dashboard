import React from 'react'

export default function StudentTable({ students }) {
    return (
        <>
            <h4>Student List</h4>
            <table className="table bg-light table-bordered border">
                <tr className="bg-dark text-white">
                    <th>Name</th>
                    <th>Age</th>
                    <th>Physics Marks</th>
                    <th>Chemistry Marks</th>
                    <th>Maths Marks</th>
                    <th>Percentage</th>
                </tr>
                {students.map((student, index) => (
                    <tr key={index}>
                        <td>{student.firstName} {student.lastName}</td>
                        <td>{student.age}</td>
                        <td>{student.phyMarks}</td>
                        <td>{student.chemMarks}</td>
                        <td>{student.mathMarks}</td>
                        <td>
                            {(student.phyMarks + student.chemMarks + student.mathMarks)/3}
                        </td>
                    </tr>
                ))}
            </table>
        </>
    )
}
