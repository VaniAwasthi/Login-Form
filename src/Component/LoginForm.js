import  "./LoginForm.css"


const LoginForm=(props)=>{
    const {label,errorMessage, onChange,id,...inputProps}=props
    return(

        <div className="loginForm">
            <label>{label}</label> 
            <input{...inputProps} onChange={onChange} />
            <span>{errorMessage}</span>
        </div>
    )
}
export default LoginForm