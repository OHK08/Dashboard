import React from 'react'
import ProfilePic from './ProfilePic'
import User from './User'

export default function Profile() {
  return (
    <>
      <div className="row ">
        <div className="col-md-12 text-center">
          <img src="src/assets/svg/dashboardImage.svg" width={40}/>
        </div>
        <div className="col-md-12 p-2 text-center">
          <ProfilePic w={60}/>
        </div>
        <div className="col-md-12 text-center">
          <User UserName={"Omshree Kenjale"} Designation={"Administrator"} />
        </div>
      </div>
    </>
  )
}
