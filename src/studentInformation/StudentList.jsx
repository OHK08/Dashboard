import React, { useState, useEffect } from 'react'

export default function StudentList({ students, handleEdit, handleDelete }) {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [displayedStudents, setDisplayedStudents] = useState(students); // State for filtered/sorted students
    const [order, setOrder] = useState("ascending");

    // Search Function
    const filteredStudents = displayedStudents.filter((student) =>
        `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchInputValue.toLowerCase())
    );

    // Sort Function
    const sortStudents = () => {
        const sortedStudents = [...displayedStudents].sort((a, b) => {
            return order === "ascending"
                ? a.firstName.localeCompare(b.firstName)
                : b.firstName.localeCompare(a.firstName);
        });
        setDisplayedStudents(sortedStudents);
        setOrder(order === "ascending" ? "descending" : "ascending");
    };

    // Filter Function
    const filterStudents = (min, max) => {
        const percentStudents = students.filter(student => {
            const avg = (student.phyMarks + student.mathMarks + student.chemMarks) / 3;
            return avg >= min && avg <= max;
        });
        setDisplayedStudents(percentStudents);
    };

    // Reset Function
    const resetStudents = () => {
        setDisplayedStudents(students);
    };

    useEffect(() => {
        setDisplayedStudents(students);
    }, [students]);
    const handleDeleteWrapper = (index) => {
        const originalIndex = students.findIndex(student => student === displayedStudents[index]);
        handleDelete(originalIndex);
    };

    return (
        <>
            <input
                type="text" placeholder="Search Students" className="form-control mb-3"
                value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)}
            />
            <button type="button" className="btn btn-sm btn-light"
                onClick={sortStudents}>
                <img src="src/assets/svg/sort.svg" />
            </button>
            <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={filterStudents}
            >
                <img src="src/assets/svg/filter.svg" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                    <button className="dropdown-item" onClick={() => filterStudents(90, 100)}>
                        {'>'} 90%
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" onClick={() => filterStudents(50, 90)}>
                        {'<'} 90% & {'>'} 50%
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" onClick={() => filterStudents(0, 50)}>
                        {'<'} 50%
                    </button>
                </li>
                <li>
                    <button className="dropdown-item" onClick={() => resetStudents()}>
                        Show All
                    </button>
                </li>
            </ul>

            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Physics</th>
                        <th>Chemistry</th>
                        <th>Math</th>
                        <th>Percentage</th>
                        <th>Edit</th>
                        <th>Delete</th>
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
                            <td>{((student.phyMarks + student.mathMarks + student.chemMarks) / 3).toFixed(2)}</td>
                            <td>
                                <button className="btn btn-sm btn-success"
                                    onClick={() => handleEdit(index)}>
                                    Edit
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-danger"
                                    onClick={() => handleDeleteWrapper(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
