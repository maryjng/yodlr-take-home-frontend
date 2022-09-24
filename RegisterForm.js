import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Api from "./api"

function RegisterForm() {
    const navigate = useNavigate()
    const DEFAULT_STATE = {
        email:"",
        firstName:"",
        lastName:"",
        password:"",
        confirmPassword:""
    }
    const [formData, setFormData] = useState(DEFAULT_STATE)

    async function register(data) {
        let res = await Api.register(data)
        console.log(res)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)

        //check if passwords match
        if (formData.password === formData.confirmPassword) {
            await register({
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                password: formData.password
            });
            navigate("/", { replace: true })
        } else {
            alert("Passwords do not match.")
            setFormData(DEFAULT_STATE)
        }
    }

    function handleChange(e) {
        const {value, name} = e.target
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    return(
        <>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control placeholder="Enter first name" name="firstName" value={formData.firstName} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control placeholder="Enter last name" name="lastName" value={formData.lastName} onChange={handleChange} required></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control placeholder="Enter password" name="password" value={formData.password} onChange={handleChange} required ></Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password: </Form.Label>
                    <Form.Control placeholder="Reenter password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required ></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit" onSubmit={handleSubmit}>Submit</Button>

            </Form>
        </>
    )
}

export default RegisterForm;