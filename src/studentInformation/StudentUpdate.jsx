import React from 'react'

export default function StudentUpdate({ inputValueU, setInputValueU, handleUpdateStudent }) {
    return (
        <>

            <form>
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <input type="text" placeholder="First Name"
                            className="form-control mb-3" value={inputValueU.firstName}
                            onChange={
                                (e) => setInputValueU(
                                    { ...inputValueU, firstName: e.target.value }
                                )} />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <input type="text" placeholder="Last Name"
                            className="form-control mb-3" value={inputValueU.lastName}
                            onChange={
                                (e) => setInputValueU(
                                    { ...inputValueU, lastName: e.target.value }
                                )} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Age"
                            className="form-control mb-3" value={inputValueU.age}
                            onChange={(e) => setInputValueU(
                                { ...inputValueU, age: e.target.value }
                            )} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Physics Marks"
                            className="form-control mb-3" value={inputValueU.phyMarks}
                            onChange={(e) => setInputValueU(
                                { ...inputValueU, phyMarks: e.target.value }
                            )} />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Chemistry Marks"
                            className="form-control mb-3" value={inputValueU.chemMarks}
                            onChange={(e) => setInputValueU(
                                { ...inputValueU, chemMarks: e.target.value }
                            )} />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <input type="number" placeholder="Math Marks"
                            className="form-control mb-3" value={inputValueU.mathMarks}
                            onChange={(e) => setInputValueU(
                                { ...inputValueU, mathMarks: e.target.value }
                            )} />
                    </div>
                </div>
                <button className="btn btn-primary btn-sm" onClick={handleUpdateStudent}>Update Student</button>
            </form>

        </>
    )
}