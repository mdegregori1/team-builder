import React from 'react'; 

const Names = props => {
    // console.log("Names", props);
    return (
    <>
      {props.teammates.map(e => (
    
        <div className = "card" key={e.id}>
          <h1>{e.name}</h1>
          <h2>{e.email}</h2>
          <h2>{e.role}</h2>
        </div>
      ))}
    </>
  );
};

export default Names;


