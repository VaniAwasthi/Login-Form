import  "./LoginForm.css"


const LoginForm=(props)=>{
    return(

        <div className="loginForm">
            {/* <label>UserName</label> */}
            <input name={props.name}
             placeholder={props.placeholder} />
        </div>
    )
}
export default LoginForm