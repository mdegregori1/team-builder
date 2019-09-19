import React, { useState } from "react";

const NameForm = props => {
    const [teammate, setTeammate] = useState({
        name: "",
        email: "",
        role: ""
    });
    const handleChanges = e => {
        setTeammate({...teammate, [e.target.name]: e.target.value})
    };
    const submitContact = e => {
        e.preventDefault();
        props.addNewContact(teammate);
        setTeammate({name: "",email: "", role: ""});
    };

  return (
    <form onSubmit={submitContact}>
      <label htmlFor="name"></label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Full Name"
        onChange={handleChanges}
        value={teammate.name}
      />
      <label htmlFor="email"></label>
      <input
        id="email"
        type="text"
        name="email"
        placeholder = "Email"
        onChange={handleChanges}
        value={teammate.email}
      />
      <label htmlFor="role"></label>
      <input
        id="roe"
        type="text"
        name="role"
        placeholder = "Role"
        onChange={handleChanges}
        value={teammate.role}
      />
      
      <button type="submit">Add</button>
    </form>
  );
};



export default NameForm;



