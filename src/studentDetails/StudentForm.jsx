import React from 'react'

export default function StudentForm({ addStudentDetails, setInputValue }) {
    return (
        <>
        <div className='form-group'>
            <h4>Add New Student</h4>
            <input type="text" placeholder="First Name" className="form-control"
                onChange={(e) => setInputValue(value => ({ ...value, firstName: e.target.value }))} />
            <input type="text" placeholder="Last Name" className="form-control"
                onChange={(e) => setInputValue(value => ({ ...value, lastName: e.target.value }))} />
            <input type="number" placeholder="Age" className="form-control"
                onChange={(e) => setInputValue(value => ({ ...value, age: e.target.value }))} />
            <input type="number" placeholder="Physics Marks" className="form-control"
                onChange={(e) => setInputValue(value => ({ ...value, phyMarks: e.target.value }))} />
            <input type="number" placeholder="Chemistry Marks" className="form-control"
                onChange={(e) => setInputValue(value => ({ ...value, chemMarks: e.target.value }))} />
            <input type="number" placeholder="Maths Marks" className="form-control"
                onChange={(e) => setInputValue(value => ({ ...value, mathMarks: e.target.value }))} />
            <br />
            <button type="submit" className="btn btn-primary m-2" onClick={addStudentDetails}>Add Student</button>
            </div>
        </>
    )
}
