import React from 'react'
import SmallText from '../assets/SmallText'

export default function User({ UserName, Designation }) {
    return (
        <>
            <p>{UserName}</p>
            <SmallText num={Designation}></SmallText>
        </>
    )
}
