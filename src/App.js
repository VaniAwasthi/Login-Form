import { useState } from 'react';
import './App.css';
import LoginForm from "./Component/LoginForm";

function App() {
   const  [values , setValues]=useState({
    username:"",
    email:"",
    password:"",
    confirPassword:"",

  });
  const inputs=[{
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    label:"Username"
  },
  {
    id:2,
    name:"email",
    type:"text",
    placeholder:"Email",
    label:"Email",
  },
  {
    id:3,
    name:"password",
    type:"password",
    placeholder:"password",
    label:"Password"
  },
  {
    id:4,
    name:"confirmPassword",
    type:"password",
    placeholder:"ConfirmPassword",
    label:"ConfirmPassword"
  }
]
  console.log("re-rendered")

const handleSubmit=(e)=>{
  e.preventDefault();

}

const onChange =(e)=>{
  setValues({...values , [e.target.name]: e.target.value})
}

console.log(values)
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        {inputs.map((input)=>(
           <LoginForm key={input.id} {...input}
            value={values[input.name]}
            onChange={onChange}/>
        ))}
       
  
        <button>submit</button>
        
      </form>
    </div>
  );
}

export default App;
