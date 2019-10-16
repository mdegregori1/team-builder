import React, {useState}  from 'react';
import styled from "styled-components";

const TeamMembers = props => {
    const [add, setAdd] = useState({
        name:"",
        email:"",
        role: ""
    })
    const handleChange = e => {
        setAdd({...add, [e.target.name]:[e.target.value]})
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.addNewMember(add);
    }
    return (
        <Form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            name="name" 
            id="name" 
            type="text" 
            placeholder="name"
            value={add.name}
            onChange={handleChange}/>
            <label htmlFor="email">Email</label>
            <input 
            name="email" 
            id="email" 
            type="text" 
            placeholder="email"
            value={add.email}
            onChange={handleChange}/>
            <label htmlFor="role">Role</label>
            <input 
            name="role" 
            id="role" 
            type="text" 
            placeholder="role"
            value={add.role}
            onChange={handleChange}/>
            <button type="submit">Add Member</button>
        </Form>
    )
}

export default TeamMembers;

const Form = styled.form `

`;//