import React from "react";
import ResourceList from "./ResourceList";
import useResources from "./useResources";

const UserList = () => {
    const users = useResources('users')

    return (
        <ul>
            {users.map(user => <li key={user.id}>{user.name}</li> )}
        </ul>
    )
}

export default UserList;