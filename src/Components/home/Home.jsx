import Homeimg from "../../Assets/home.jpeg"
import './Home.css'

let Home = () => {
    return (
        <div className="row featurette home-container">
            <div className="col-md-7 home-description">
                <h1 className="featurette-heading">Welcome to <span>PixelAnt Studio</span></h1>
                <h3 className="lead">A design studio specializing in interior designing and 3D art. Providing modern kitchen , bathroom , living room designs</h3>
            </div>
            <div className="col-md-5 ">
                <img className="rounded-circle home-img" src={Homeimg} alt="home png" />

            </div>
        </div>
    )
}

export default Home;