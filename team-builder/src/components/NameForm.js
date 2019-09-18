import React, { useState } from "react";

const NameForm = props => {
    const [name, setName] = useState({
        name: "",
        email: "",
        role: ""
    });
    const handleChanges = e => {
        setName({...name, [e.target.name]: e.target.value})
        //if doesn't work, check here
    };
    const submitName = e => {
        e.preventDefault();
        props.addNewName(name);
        //add in app.js
        setName({name:"",email:"", role:""});
    };

  return (
    <form onSubmit={submitName}>
      <label htmlFor="title">Name:</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleChanges}
        value={name.name}
      />
      <label htmlFor="note">Email:</label>
      <input
        id="note"
        type="text"
        name="body"
        onChange={handleChanges}
        value={name.email}
      />
        <label htmlFor="title">Role:</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleChanges}
        value={name.role}
      />
      
      <button type="submit">Add</button>
    </form>
  );
};



export default NameForm;



