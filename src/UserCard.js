import React from "react"
import Card from "react-bootstrap/Card";

function UserCard({ id, email, firstName, lastName, state }) {
    return(
    <li>
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>User ID: ${id}$ | {lastName}, {firstName}</Card.Title>
                <Card.Text>
                    <div>Email: {email}</div>
                    <div>State: {state}</div>
                </Card.Text>
                {/* <Button variant="primary">${firstName}'s User Page</Button> */}
            </Card.Body>
        </Card>
    </li>
    )
}

export default UserCard;