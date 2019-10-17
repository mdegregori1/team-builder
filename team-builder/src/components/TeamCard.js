import React from 'react';
import styled from "styled-components";

const TeamCard = props => {
    return (
       <div>
           {props.members.map((note,index)=>{
               return(
                   <Container key={index}>
                       <h5>Name - {note.name}</h5>
                       <h5>Email - {note.email}</h5>
                       <h5>Role - {note.role}</h5>
                   </Container>
               )
           })}
       </div>
    )
}

export default TeamCard;

const Container = styled.div`
border: 1px solid orange;
`;//