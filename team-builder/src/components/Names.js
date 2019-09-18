import React from 'react'; 

const Names = props => {
    // console.log("Names", props);
    return (
    <>
      {props.names.map(name => (
        <div key={name.id}>
          <h1>{name.name}</h1>
          <h2>{name.email}</h2>
          <h2>{name.role}</h2>
        </div>
      ))}
    </>
  );
};





export default Names;



// have to define "team" "email" "role" and "id"