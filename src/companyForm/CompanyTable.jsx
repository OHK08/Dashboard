import React from 'react'

export default function CompanyTable({ details }) {
    return (
        <>
            <table className="table table-striped table-success mt-4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile no.</th>
                        <th>Date of Birth</th>
                        <th>Degree</th>
                        <th>Skills</th>
                        <th>Certificates</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map((candidate, index) => (
                            <tr key={index}>
                                <td>{candidate.name}</td>
                                <td>{candidate.mob}</td>
                                <td>{candidate.dob}</td>
                                <td>{candidate.degree}</td>
                                <td>{candidate.skills.join(', ')}</td>
                                <td>
                                    <ul>
                                        {candidate.certificates.map((cert, index1) => (
                                            <li key={index1}>
                                                {cert.instituteName} - {cert.courseName} ({cert.courseDuration})
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}
