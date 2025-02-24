import React from 'react'

export default function StudentForm({ addStudentDetails, inputValue, setInputValue, handleChange }) {
    return (
        <>
            <form>
                <h4>Add New Student</h4>
                <div className="row g-3 mb-3">
                    <div className="col">
                        <input type="text" placeholder="First Name" 
                            className="form-control"
                            name="firstName" value={inputValue.firstName}
                            onChange={(e) => setInputValue(handleChange)} />
                    </div>
                    <div className="col">
                        <input type="text" placeholder="Last Name" 
                            className="form-control"
                            name="lastName" value={inputValue.lastName}
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="mb-3">
                    <input type="number" placeholder="Age" 
                        className="form-control"
                        name="age" value={inputValue.age}
                        onChange={handleChange} />
                </div>
                <div className="row g-3 mb-3">
                    <div className="col">
                        <input type="number" placeholder="Physics Marks" 
                            className="form-control"
                            name="phyMarks" value={inputValue.phyMarks}
                            onChange={handleChange} />
                    </div>
                    <div className="col">
                        <input type="number" placeholder="Chemistry Marks" 
                            className="form-control"
                            name="chemMarks" value={inputValue.chemMarks}
                            onChange={handleChange} />
                    </div>
                    <div className="col">
                        <input type="number" placeholder="Maths Marks" 
                            className="form-control"
                            name="mathMarks" value={inputValue.mathMarks}
                            onChange={handleChange} />
                    </div>
                </div>
                <button 
                    className="btn btn-primary mb-3" 
                    onClick={addStudentDetails}>
                        Add Student
                </button>
            </form>
        </>
    )
}
