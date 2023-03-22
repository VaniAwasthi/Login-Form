import  "./loginForm.css"


const LoginForm=(props)=>{
    return(

        <div className="loginForm">
            {/* <label>UserName</label> */}
            <input ref={props.refer} placeholder={props.placeholder} />
        </div>
    )
}
export default LoginForm