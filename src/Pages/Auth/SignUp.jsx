import "./SignIn.css"
import { Link } from "react-router-dom"

let SignUp = () => {
    return (
        <>
        <section className="Login_Form">
            <h1 className="Login_Form_title">Sign Up</h1>
            <div class="mb-3">
                <input type="email" class="form-control" id="email" placeholder="Email" />
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password" />
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" id="password" placeholder="Confirm Password" />
            </div>
            <div >
                <button className="rounded-pill login_Btn"  type="button">SIGNUP</button>
            </div>
            <div>
                <p className="form_text my-3">Already have an account?<Link to="/login"><span className="Btn-red">SIGNIN</span></Link></p>
            </div>
        </section>
        </>
    )
}

export default SignUp