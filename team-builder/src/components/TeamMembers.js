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
        //why is this set up this way???
        //my thoughts -> it allows for us to grab data from the whole array - without it, we can't grab all entered fields and store it into state 
    }
    const handleSubmit = e => {
        e.preventDefault();
        props.addNewMember(add);
    }
    return (
        <Form onSubmit={handleSubmit}>
            <input 
            name="name" 
            id="name" 
            type="text" 
            placeholder="name"
            value={add.name}
            onChange={handleChange}/>
            <input 
            name="email" 
            id="email" 
            type="text" 
            placeholder="email"
            value={add.email}
            onChange={handleChange}/>
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