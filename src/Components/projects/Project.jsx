import Project1 from "../../Assets/kitchen design.png"
import Project2 from "../../Assets/bathroom.png"
import Project3 from "../../Assets/livign room.png"
import "./Project.css"

let Projects = () =>{
    return(
        <>
        <div className="Projects_Description">
        <span>Projects</span>
        <h1>Our Latest Work</h1>
        </div>
    <div className="Project_Container">
        <div><img src={Project1} alt="kitchen design"/></div>
        <div><img src={Project2} alt="bathroom"/></div>
        <div><img src={Project3} alt="livign room"/></div>
    </div>
    </>)
}
export default Projects