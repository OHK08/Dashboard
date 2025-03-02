import React, { useContext } from 'react'
import UserContext from './UserContext'

function UserProfile() {
    const users = useContext(UserContext);
    return (
        <>
            {users.map((user, index) => (
            <ul key={index}>
                <li>Name: {user.userName}</li>
                <li>Id: {user.userId}</li>
            </ul>
            ))}
        </>
    )
}
export default UserProfile;
