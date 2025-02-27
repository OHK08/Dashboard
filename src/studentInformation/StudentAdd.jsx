import React from 'react'

export default function StudentAdd({ inputValue, setInputValue, handleAddStudent }) {
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <input type="text" placeholder="First Name"
                            className="form-control mb-3" value={inputValue.firstName}
                            onChange={
                                (e) => setInputValue(
                                    { ...inputValue, firstName: e.target.value }
                                )} />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <input type="text" placeholder="Last Name"
                            className="form-control mb-3" value={inputValue.lastName}
                            onChange={
                                (e) => setInputValue(
                                    { ...inputValue, lastName: e.target.value }
                                )} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Age"
                            className="form-control mb-3" value={inputValue.age}
                            onChange={(e) => setInputValue(
                                { ...inputValue, age: e.target.value }
                            )} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Physics Marks"
                            className="form-control mb-3" value={inputValue.phyMarks}
                            onChange={(e) => setInputValue(
                                { ...inputValue, phyMarks: e.target.value }
                            )} />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Chemistry Marks"
                            className="form-control mb-3" value={inputValue.chemMarks}
                            onChange={(e) => setInputValue(
                                { ...inputValue, chemMarks: e.target.value }
                            )} />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Math Marks"
                            className="form-control mb-3" value={inputValue.mathMarks}
                            onChange={(e) => setInputValue(
                                { ...inputValue, mathMarks: e.target.value }
                            )} />
                    </div>
                </div>
                <button className="btn btn-primary btn-sm" onClick={handleAddStudent}>Add New Student</button>
            </form>
        </>
    )
}