import React from 'react'

export default function deleteStudent(index, students, setStudentDetails) {
    setStudentDetails(students.filter((_, i) => i !== index));
}
