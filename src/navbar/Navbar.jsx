import React from "react";
import Profile from "./Profile";
import Option from "./Option";

export default function Navbar() {
  const menuOptions = [
    ["src/assets/svg/activity.svg", "Activity"],
    ["src/assets/svg/home.svg", "Home"],
    ["src/assets/svg/schedule.svg", "Schedule"],
    ["src/assets/svg/courses.svg", "Courses"],
    ["src/assets/svg/videos.svg", "Videos"],
    ["src/assets/svg/analytics.svg", "Analytics"],
    ["src/assets/svg/settings.svg", "Settings"],
    ["src/assets/svg/support.svg", "Support"],
    ["src/assets/svg/logOut.svg", "Log Out"],
  ];

  return (
    <>
      <div className=" bg-dark p-3 vh-100">
        <Profile />
        <ul className="nav flex-column mt-4">
          {menuOptions.map(([img, title], index) => (
            <Option key={index} img={img} title={title} />
          ))}
        </ul>
      </div>
    </>
  );
}


// <Option img={"src/assets/svg/activity.svg"} title={"Activity"}/>
// <Option img={"src/assets/svg/home.svg"} title={"Home"}/>
// <Option img={"src/assets/svg/schedule.svg"} title={"Schedule"}/>
// <Option img={"src/assets/svg/courses.svg"} title={"Courses"}/>
// <Option img={"src/assets/svg/videos.svg"} title={"Videos"}/>
// <Option img={"src/assets/svg/analytics.svg"} title={"Analytics"}/>
// <Option img={"src/assets/svg/settings.svg"} title={"Settings"}/>
// <Option img={"src/assets/svg/support.svg"} title={"Support"}/>
// <Option img={"src/assets/svg/logOut.svg"} title={"Log Out"}/>
