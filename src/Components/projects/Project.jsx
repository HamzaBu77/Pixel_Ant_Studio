import Project1 from "../../Assets/kitchen design.png"
import Project2 from "../../Assets/bathroom.png"
import Project3 from "../../Assets/livign room.png"
import Project4 from "../../Assets/Bedroom.png"
import Project5 from "../../Assets/Dinning_Room.png"
import Project6 from "../../Assets/Tudor_Design.png"
import "./Project.css"

let Projects = () =>{
    return(
        <section id="projects">
        <div className="Projects_Description ">
        <span>Projects</span>
        <h1>Our Latest Work</h1>
        </div>
        <div class="Project_Container ">
        <div class="Project_Item">
            <img src={Project1} alt="kitchen design"/>
            <div class="overlay">Kitchen Design for <br/> youtuber Gearge Dunnet</div>
        </div>
        <div class="Project_Item">
            <img src={Project2} alt="bathroom"/>
            <div class="overlay">Bathroom design for Ms. Sarah</div>
        </div>
        <div class="Project_Item">
            <img src={Project3} alt="living room"/>
            <div class="overlay">Living room Design for <br/> youtuber Gearge Dunnet</div>
        </div>
        <div class="Project_Item">
            <img src={Project4} alt="living room"/>
            <div class="overlay">Bedroom for Mr. Alex</div>
        </div>
        <div class="Project_Item">
            <img src={Project5} alt="living room"/>
            <div class="overlay">Dinning room Design For Modbloc</div>
        </div>
        <div class="Project_Item">
            <img src={Project6} alt="living room"/>
            <div class="overlay">Modern Tudor Design for Ms. Jacilane</div>
        </div>
    </div>
    </section>)
}
export default Projects