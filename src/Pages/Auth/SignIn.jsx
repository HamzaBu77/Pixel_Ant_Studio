import "./SignIn.css"
import { Link } from "react-router-dom"


let SignIn = () => {
    return (
        <>
        <section className="Login_Form">
            <h1 className="Login_Form_title">Sign in</h1>
            <div class="mb-3">
                <input type="email" class="form-control" id="email" placeholder="Email" />
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password" />
            </div>
            <div>
                <button  className="Btn-red" type="button">Forget Password?</button>
            </div>
            <div >
            <button className="rounded-pill login_Btn"  type="button">LOGIN</button>
            </div>
            <div >
            Don't have an account? <Link to="/signup" className="Btn-red">Create One</Link>
            </div>
        </section>
        </>
    )
}

export default SignIn