import { useRef, useState } from 'react';
import './App.css';
import LoginForm from "./Component/LoginForm";

function App() {
  // const  [username , setUsername]=useState("");

  console.log("re-rendered")

const handleSubmit=(e)=>{
  e.preventDefault();
  const data = new FormData(e.target)
  console.log(Object.fromEntries(data.entries()))

}

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <LoginForm name="username" placeholder="UserName"/>
        <LoginForm name="email " placeholder="Email"/>
        <LoginForm name="Password" placeholder="Password"/>
        <LoginForm name="confirmPassword" placeholder="ConfirmPassword"/>
        <button>submit</button>
        
      </form>
    </div>
  );
}

export default App;
