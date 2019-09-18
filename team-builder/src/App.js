import React, { useState } from 'react';
import './App.css';
import Names from "./components/Names";
import NameForm from "./components/NameForm";
import ReactDOM from "react-dom";

function App() {
  const [names,setNames] = useState([
    {
      name: "Mauricio Degregori",
      email: "mau@gmail.com",
      role: "student"
    }
    ,
    {
      name: "Rosemary",
      email: "rose@gmail.com",
      role: "student"
    }
  ]);
  const addNewName = name => {
    const newName = {
      name: name.name,
      email: name.email,
      role: name.role
    };
    setNames([...names, newName]);
  }
  return (
    <div className="App">
      <h1>Team Members</h1>
      <NameForm addNewName = {addNewName}/>
      <Names notes={names}/>
    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;