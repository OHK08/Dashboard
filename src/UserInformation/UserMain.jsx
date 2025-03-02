import React from 'react'
import UserContext from "./UserContext";
import UserProfile from './UserProfile';

export default function UserMain() {
    const users = [
        {userName: "Omshree", userId: 1}, 
        {userName: "Yash", userId: 2}
    ];
    return (
        <UserContext.Provider value={users}>
            <UserProfile/>
        </UserContext.Provider>
    )
}