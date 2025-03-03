import React from 'react'

export default function StudentAdd({ inputValue, handleAddStudent, handleSubmit, handleChange }) {
    const handleAddSubmit = (event) => {
        handleAddStudent();
        handleSubmit(event);
    };

    return (
        <>
            <form onSubmit={handleAddSubmit}>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <input type="text" placeholder="First Name"
                            className="form-control mb-3" value={inputValue.firstName}
                            name="firstName"
                            onChange={handleChange} />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <input type="text" placeholder="Last Name"
                            className="form-control mb-3" value={inputValue.lastName}
                            name="lastName"
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Roll no."
                            className="form-control mb-3" value={inputValue.roll}
                            name="roll"
                            onChange={handleChange} />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Age"
                            className="form-control mb-3" value={inputValue.age}
                            name="age"
                            onChange={handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Physics Marks"
                            className="form-control mb-3" value={inputValue.phyMarks}
                            name="phyMarks"
                            onChange={handleChange} />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Chemistry Marks"
                            className="form-control mb-3" value={inputValue.chemMarks}
                            name="chemMarks"
                            onChange={handleChange} />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Math Marks"
                            className="form-control mb-3" value={inputValue.mathMarks}
                            name="mathMarks"
                            onChange={handleChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-sm">Add New Student</button>
            </form>
        </>
    )
}