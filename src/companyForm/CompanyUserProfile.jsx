import React from 'react'
import { useParams } from 'react-router-dom'

export default function CompanyUserProfile() {
    const {name} = useParams();
  return (
    <>
    <div className='container'>
        <h2>User Profile</h2>
        <h3> Welcome {name} !</h3>
    </div>
    </>
  )
}
