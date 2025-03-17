import React, { useState } from 'react';
import addIcon from './addIcon.svg';
import crossIcon from './crossIcon.svg';

export default function CompanyForm({
    inputValue,
    handleAddCandidate,
    handleChange,
    handleAddSkill,
    handleRemoveSkill,
    handleAddCertificate,
    handleRemoveCertificate
}) {
    const [certificateInput, setCertificateInput] = useState({
        instituteName: "",
        courseName: "",
        courseDuration: ""
    });
    const [skillInput, setSkillInput] = useState("");
    const [skillError, setSkillError] = useState("");
    const [certificateError, setCertificateError] = useState("");

    const handleCertificateChange = (e) => {
        const { name, value } = e.target;
        setCertificateInput(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSkillChange = (e) => {
        setSkillInput(e.target.value);
    };

    const addSkill = () => {
        if (skillInput.trim()) {
            handleAddSkill(skillInput);
            setSkillInput("");
            setSkillError("");
        } else {
            setSkillError("Skill cannot be empty");
        }
    };

    const addCertificate = () => {
        const { instituteName, courseName, courseDuration } = certificateInput;
        if (instituteName.trim() && courseName.trim() && courseDuration.trim()) {
            handleAddCertificate(certificateInput);
            setCertificateInput({ instituteName: "", courseName: "", courseDuration: "" });
            setCertificateError("");
        } else {
            setCertificateError("All certificate fields are required");
        }
    };

    return (
        <div className="container">
            <div className='row'>
                <div className='col-sm-3 col-md-3 col-lg-3'>
                    <img
                        src="https://copyrightservice.co.uk/_f/4815/9197/8330/logo-1933884_640.jpg"
                        style={{ width: "60%", borderRadius: "30px", padding: "10px" }}
                        alt="Company Logo"
                    />
                </div>
                <div className='col-sm-9 col-md-9 col-lg-7'>
                    <h2 className='text-center p-3'>Job Application</h2>
                </div>
            </div>

            <form>

                <div className='row mt-2'>
                    <div className='col-sm-2 col-md-2 col-lg-2'>
                        <label htmlFor="name" className="form-label">Name:</label>
                    </div>
                    <div className='col-sm-10 col-md-10 col-lg-10'>
                        <input 
                            type='text' 
                            className='form-control' 
                            id="name"
                            name="name"
                            value={inputValue.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            aria-required="true"
                        />
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-sm-2 col-md-2 col-lg-2'>
                        <label htmlFor="mob" className="form-label">Mobile no.:</label>
                    </div>
                    <div className='col-sm-4 col-md-4 col-lg-4'>
                        <input 
                            type='number' 
                            className='form-control' 
                            id="mob"
                            name="mob"
                            value={inputValue.mob || ''}
                            onChange={handleChange}
                            placeholder="Enter mobile number"
                            aria-required="true"
                        />
                    </div>
                    <div className='col-sm-2 col-md-2 col-lg-2'>
                        <label htmlFor="dob" className="form-label">Date of Birth:</label>
                    </div>
                    <div className='col-sm-4 col-md-4 col-lg-4'>
                        <input 
                            type='date' 
                            className='form-control' 
                            id="dob"
                            name="dob"
                            value={inputValue.dob || ''}
                            onChange={handleChange}
                            aria-required="true"
                        />
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-sm-2 col-md-2 col-lg-2'>
                        <label htmlFor="email" className="form-label">Email:</label>
                    </div>
                    <div className='col-sm-4 col-md-4 col-lg-4'>
                        <input 
                            type='email' 
                            className='form-control' 
                            id="email"
                            name="email"
                            value={inputValue.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            aria-required="true"
                        />
                    </div>
                    <div className='col-sm-2 col-md-2 col-lg-2'>
                        <label className="form-label">Gender:</label>
                    </div>
                    <div className='col-sm-4 col-md-4 col-lg-4'>
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="gen" 
                                id="genM"
                                value="male"
                                checked={inputValue.gen === "male"}
                                onChange={handleChange}
                                aria-label="Male"
                            />
                            <label className="form-check-label" htmlFor="genM">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input" 
                                type="radio" 
                                name="gen" 
                                id="genF"
                                value="female"
                                checked={inputValue.gen === "female"}
                                onChange={handleChange}
                                aria-label="Female"
                            />
                            <label className="form-check-label" htmlFor="genF">Female</label>
                        </div>
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-sm-2 col-md-2 col-lg-2'>
                        <label htmlFor="degree" className="form-label">Degree:</label>
                    </div>
                    <div className='col-sm-6 col-md-6 col-lg-6'>
                        <input 
                            type='text' 
                            className='form-control' 
                            id="degree"
                            name="degree"
                            value={inputValue.degree}
                            onChange={handleChange}
                            placeholder="Enter your degree"
                            aria-required="true"
                        />
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-sm-2 col-md-2 col-lg-2'>
                        <label className="form-label">Skills:</label>
                    </div>
                    <div className='col-sm-5 col-md-5 col-lg-5'>
                        <input
                            type='text'
                            className='form-control'
                            value={skillInput}
                            onChange={handleSkillChange}
                            placeholder="Enter a skills"
                            aria-label="Skill input"
                        />
                        {skillError && <small className="text-danger">{skillError}</small>}
                    </div>
                    <div className='col-sm-4 cp;-md-4 col-lg-4'>
                        <button 
                            type='button' 
                            className='btn btn-sm btn-primary' 
                            onClick={addSkill}
                            aria-label="Add Skill"
                        >
                            <img src={addIcon} alt="Add" />
                        </button>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        {(inputValue.skills || []).map((skill, index) => (
                            <span key={index} className="badge bg-secondary p-2 m-1">
                                {skill}
                                <img
                                    src={crossIcon}
                                    alt="Remove skill"
                                    onClick={() => handleRemoveSkill(index)}
                                    style={{ width: '15px', cursor: 'pointer', marginLeft: '5px' }}
                                />
                            </span>
                        ))}
                    </div>
                </div>

                <div className='row mt-2'>
                    <div className='col-sm-2 col-md-2 col-lg-2'>
                        <label className="form-label">Certificates:</label>
                    </div>
                    <div className='col-sm-3 col-md-3 col-lg-3'>
                        <input
                            type='text'
                            className='form-control'
                            name="instituteName"
                            value={certificateInput.instituteName}
                            onChange={handleCertificateChange}
                            placeholder='Institute Name'
                            aria-label="Institute Name"
                        />
                    </div>
                    <div className='col-sm-3 col-md-3 col-lg-3'>
                        <input
                            type='text'
                            className='form-control'
                            name="courseName"
                            value={certificateInput.courseName}
                            onChange={handleCertificateChange}
                            placeholder='Course Name'
                            aria-label="Course Name"
                        />
                    </div>
                    <div className='col-sm-3 col-md-3 col-lg-3'>
                        <input
                            type='text'
                            className='form-control'
                            name="courseDuration"
                            value={certificateInput.courseDuration}
                            onChange={handleCertificateChange}
                            placeholder='Course Duration'
                            aria-label="Course Duration"
                        />
                    </div>
                    <div className='col-sm-1 col-md-1 col-lg-1'>
                        <button 
                            type='button' 
                            className='btn btn-sm btn-primary' 
                            onClick={addCertificate}
                            aria-label="Add Certificate"
                        >
                            <img src={addIcon} alt="Add" />
                        </button>
                    </div>
                </div>
                {certificateError && (
                    <div className='row mt-1'>
                        <div className="col-sm-10 offset-sm-2">
                            <small className="text-danger">{certificateError}</small>
                        </div>
                    </div>
                )}
                <div className='row mt-2'>
                    <div className='col-sm-12 col-md-12 col-lg-12'>
                        {(inputValue.certificates || []).map((cert, index) => (
                            <span key={index} className="badge bg-secondary p-2 m-1">
                                {cert.instituteName} - {cert.courseName} ({cert.courseDuration})
                                <img
                                    src={crossIcon}
                                    alt="Remove certificate"
                                    onClick={() => handleRemoveCertificate(index)}
                                    style={{ width: '15px', cursor: 'pointer', marginLeft: '5px' }}
                                />
                            </span>
                        ))}
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <button 
                            type="button" 
                            className="btn btn-primary me-2" 
                            onClick={handleAddCandidate}
                        >
                            Add Candidate
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}