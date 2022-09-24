import React, { useEffect, useState } from "react"
import Api from "./api";
import UserCard from "./UserCard"

function UserList() {  
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const res = await Api.getAllUsers()
            console.log(res)
            console.log(Object.values(res))
            const usersRes = Object.values(res)
            setUsers(usersRes)
        }
        getUsers()
    }, [])

    //add link to each li directing to user page
    const usersLi = users.map(u => <UserCard key={u.id} id={u.id} email={u.email} firstName={u.firstName} lastName={u.lastName} state={u.state} />
    )

    return(
        <div>
            <h2>All Users</h2>
            <ul>
                {usersLi}
            </ul>
        </div>
    )

}

export default UserList;