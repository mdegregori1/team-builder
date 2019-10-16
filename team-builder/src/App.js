import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";

import TeamCard from "./components/TeamCard";
import TeamMembers from "./components/TeamMembers";

function App() {
  const [defaultMembers, setDefaultMembers] = useState([
    {
      name: "Mauricio Degregori",
      email: "mauricio@gmail.com",
      role: "Software Engineer"
    },
    {
      name: "Maris Moreno",
      email: "maris@gmail.com",
      role: "Fashion Designer"
    }
  ]);
  const addNewMember = memberadd => {
    setDefaultMembers([...defaultMembers, memberadd])
  }

  return (
    <Container1 className="App">
      <h1>Team Builder</h1>
      <TeamMembers addNewMember={addNewMember}/>
      <TeamCard defaultMembers={defaultMembers}/>
    </Container1>
  );
}

export default App;

const Container1 = styled.div`



`;

