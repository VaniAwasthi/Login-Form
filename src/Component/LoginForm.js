import  "./LoginForm.css"


const LoginForm=(props)=>{
    const [focused , setFocused]=useState(false)
    const {label,errorMessage, onChange,id,...inputProps}=props
    
    const handleFocus=(e)=>{
        setFocused(true);
    }
    
    return(

        <div className="loginForm">
            <label>{label}</label> 
            <input{...inputProps}
                onChange={onChange}
                onBlur={handleFocus} 
                onFocus={()=>
                inputProps.name==="confirPassword" && setFocused(true)}
                focused={focused.toString}/>
            <span>{errorMessage}</span>
        </div>
    )
}
export default LoginForm