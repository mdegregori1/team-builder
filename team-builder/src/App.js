import React, { useState } from 'react';
import './App.css';
import Names from "./components/Names";
import NameForm from "./components/NameForm";


function App() {
  const [teammates,setTeammates] = useState([
    {
      name: "Mauricio Degregori",
      email: "mau@gmail.com",
      role: "student"
    }
    ,

  ]);
  const addNewContact = e => {
    const newContact = {
      name: e.name,
      email: e.email,
      role: e.role
    };
    setTeammates([...teammates, newContact]);
  }
  return (
    <div className="App">
      <h1>Team Members</h1>
      <NameForm addNewContact = {addNewContact}/>
      <div className = "memberlist">
        <Names teammates={teammates}/>
      </div>
    </div>
  );
}

export default App;