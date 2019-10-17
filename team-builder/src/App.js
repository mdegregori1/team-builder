import React, { useState } from 'react';
import './App.css';
import styled from "styled-components";

import TeamCard from "./components/TeamCard";
import TeamMembers from "./components/TeamMembers";
import Search from "./components/Search";

function App() {
  const [members, setMembers] = useState([
    {
      name: "Mauricio Degregori",
      email: "mauricio@gmail.com",
      role: "Software Engineer"
    },
    {
      name: "Maris Moreno",
      email: "maris@gmail.com",
      role: "Fashion Designer"
    },
    {
      name: "Cameron Kelley",
      email: "cam@gmail.com",
      role: "Founder"
    }
  ]);
  const addNewMember = memberadd => {
    setMembers([...members, memberadd])
            //why is this set up this way???
        //my thoughts -> it allows for data to be stored in state(updated the array of objects) and so everything you add gets added to "members"
  }

  return (
    <div className="App">
      <Title>Team Builder</Title>
      <Top>
        <Newsearch>
          <Search addNewMember={addNewMember} members={members}/>
        </Newsearch>
        <TeamMembers addNewMember={addNewMember}/>
      </Top>
      <Members>
        <TeamCard members={members}/>
      </Members>
    </div>
  );
}

export default App;

const Title = styled.h1`

`;

const Top = styled.div`
height: 15vh;
display: flex; 
flex-direction: column-reverse;
justify-content: flex-end;
align-items: center;
color: #CD5C5C

`;

const Newsearch = styled.div`
padding: 1%;
margin: 2%;

`

const Members = styled.div`
`
