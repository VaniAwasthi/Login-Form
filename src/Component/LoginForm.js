import  "./LoginForm.css"


const LoginForm=(props)=>{
    const {label, onChange,id,...inputProps}=props
    return(

        <div className="loginForm">
             <label>{label}</label> 
            <input{...inputProps} onChange={onChange} />
        </div>
    )
}
export default LoginForm