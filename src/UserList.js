import React from "react"
import Api from "./api";
import UserCard from "./UserCard"

function UserList() {  
    const res = Api.getAllUsers()
    const allUsers = JSON.parse(res)
    const users = allUsers.values()


    //add link to each li directing to user page
    const usersLi = users.map(u => <UserCard id={u.id} email={u.email} firstName={u.firstName} lastName={u.lastName} state={u.state} />
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