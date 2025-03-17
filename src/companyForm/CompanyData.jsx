import React, { useState, useEffect } from 'react';
import CompanyForm from './CompanyForm';
import CompanyTable from './CompanyTable';

export default function CompanyData() {
    const [details, setDetails] = useState([]);
    const [inputValue, setInputValue] = useState({
        name: "",
        mob: null,
        dob: null,
        email: "",
        gen: "",
        degree: "",
        skills: [],
        certificates: [],
    });

    useEffect(() => {
        console.log(details);
    }, [details]);

    const handleAddCandidate = () => {
        setDetails([...details, inputValue]);
        setInputValue({
            name: "",
            mob: null,
            dob: null,
            email: "",
            gen: "",
            degree: "",
            skills: [],
            certificates: [],
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddSkill = (skill) => {
        if (skill.trim()) {
            setInputValue((prevState) => ({
                ...prevState,
                skills: [...prevState.skills, skill],
            }));
        }
    };

    const handleRemoveSkill = (index) => {
        setInputValue((prevState) => ({
            ...prevState,
            skills: prevState.skills.filter((_, i) => i !== index),
        }));
    };

    const handleAddCertificate = (certificate) => {
        if (certificate.instituteName.trim() && certificate.courseName.trim() && certificate.courseDuration) {
            setInputValue((prevState) => ({
                ...prevState,
                certificates: [...prevState.certificates, certificate],
            }));
        }
    };

    const handleRemoveCertificate = (index) => {
        setInputValue((prevState) => ({
            ...prevState,
            certificates: prevState.certificates.filter((_, i) => i !== index),
        }));
    };

    return (
        <div className="container">
            <CompanyForm
                inputValue={inputValue}
                handleChange={handleChange}
                handleAddCandidate={handleAddCandidate}
                handleAddSkill={handleAddSkill}
                handleRemoveSkill={handleRemoveSkill}
                handleAddCertificate={handleAddCertificate}
                handleRemoveCertificate={handleRemoveCertificate}
            />
            <CompanyTable details={details} />
        </div>
    );
}