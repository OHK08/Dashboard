import React from 'react'

export default function StudentTable({ filteredStudents, searchStudentDetails, searchInputValue, handleRowClick }) {
    return (
        <>
            <h4>Student List</h4>
            <input
                type="text"
                placeholder='Search student'
                value={searchInputValue}
                onChange={searchStudentDetails}
                className='form-control mb-2'
            />
            <table className="table table-striped table-hover table-bordered bg-light">
                <thead className="bg-dark text-white text-center">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Physics Marks</th>
                        <th>Chemistry Marks</th>
                        <th>Maths Marks</th>
                        <th>Percentage</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {/* {filteredStudents.map((student, index) => (
                        <tr key={index} onClick={() => handleRowClick(student)}>
                            <td>{student.firstName} {student.lastName}</td>
                            <td>{student.age}</td>
                            <td>{student.phyMarks}</td>
                            <td>{student.chemMarks}</td>
                            <td>{student.mathMarks}</td>
                            <td>
                                {((student.phyMarks + student.chemMarks + student.mathMarks) / 3).toFixed(2)}%
                            </td>
                        </tr>
                    ))} */}
                     {filteredStudents.map((student, index) => {
                            const phyMarks = Number(student.phyMarks) || 0;
                            const chemMarks = Number(student.chemMarks) || 0;
                            const mathMarks = Number(student.mathMarks) || 0;
                            const percentage = ((phyMarks + chemMarks + mathMarks) / 3).toFixed(2);

                            return (
                                <tr key={index} onClick={() => handleRowClick(student)} style={{ cursor: "pointer" }}>
                                    <td>{student.firstName} {student.lastName}</td>
                                    <td>{student.age}</td>
                                    <td>{phyMarks}</td>
                                    <td>{chemMarks}</td>
                                    <td>{mathMarks}</td>
                                    <td>{percentage}%</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>

        </>
    )
}
