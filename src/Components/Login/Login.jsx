import Footer from "../footer/Footer"
import "./Login.css"
import { Link } from "react-router-dom"
let Login = () => {
    return( 
        <>
        <form >
        <p className="Form_Text">Don't have an account?
          <Link to="/login" id="login">SignUp</Link></p>
        <div className="Login_Container">
        <h2  >Login</h2>
        <div className="Fields">
          <div>
        <label htmlFor="userName">Username:</label>
        </div>
        <div>
        <input type="text" id="userName" required/>
        </div>
        </div>
     
     
     <div className="Fields">
     <div>
    <label htmlFor="password">Password:</label>
    </div>
    <div>
    <input type="password" id="password" required/>
    </div>
    </div>
    
    
     
     <div className="button_container">
    <button > Submit</button>
    </div>

    </div>
</form>
<Footer/>
</>
    )
}

export default Login