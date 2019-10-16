import React from 'react';
import styled from "styled-components";

const TeamCard = props => {
    return (
       <div>
           {props.defaultMembers.map((note,index)=>{
               return(
                   <Container key={index}>
                       <h5>name - {note.name}</h5>
                       <h5>email - {note.email}</h5>
                       <h5>role - {note.role}</h5>
                   </Container>
               )
           })}
       </div>
    )
}

export default TeamCard;

const Container = styled.div`



`;