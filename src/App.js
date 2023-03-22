import { useRef, useState } from 'react';
import './App.css';
import LoginForm from "./Component/LoginForm";

function App() {
  // const  [username , setUsername]=useState("");
  const usernameRef=useRef();

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log(usernameRef);

}

  return (
    <div className="App">
      <from onsubmit={handleSubmit}>
        <LoginForm refer={usernameRef} placeholder="UserName"/>
        <LoginForm placeholder="Email"/>
        <LoginForm placeholder="Password"/>
        <LoginForm placeholder="ConfirmPassword"/>
        <button>submit</button>
        
      </from>
    </div>
  );
}

export default App;
