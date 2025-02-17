import React from 'react'

export default function ProfilePic({w}) {
  return (
    <>
      <img
        src="src/assets/profilePic.png" width={w}
        style={{ borderRadius: "50%"}}
      />
    </>
  )
}
