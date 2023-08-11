import "./Services.css"
import Service1 from "../../Assets/3d-rendering.png"
import Service2 from "../../Assets/interior-design.png"
import Service3 from "../../Assets/kitchen-room.png"


  
let Services = () =>{
   
    return(
        <>
            <div className="Package_container" >
                <div>
            <h1 className = "Header">Services we are providing</h1>
            </div>
            <div className="section_container">
                
                <div className="content_container">
                <div className="Section_content">
                <img src={Service1} alt="Econnomy Class Icon"/>
                <h3 >3D-Rendering</h3>
                <p >Budget-friendly accommodation with affordable dining options</p>
                <button>Explore<i class="uil uil-arrow-right"></i></button>
                </div>

                 <div className="Section_content">
                <img src={Service2}  alt="First Class Icon"/>
                <h3 >Interior Design</h3>
                <p >Premium hotels with fine dining experiences, showcasing local & international cuisine</p>
                <button>Explore<i class="uil uil-arrow-right"></i></button>
                </div>
                 
                 <div className="Section_content">
                <img src={Service3}  alt="Business Class Icon"/>
                <h3>kitchen Design</h3>
                <p>High-end Accommodation with exclusive private guided tours</p>
                <button>Explore<i class="uil uil-arrow-right"></i></button>
                </div>
                </div>
                </div>
        </div>
        </>
    )
}

export default Services