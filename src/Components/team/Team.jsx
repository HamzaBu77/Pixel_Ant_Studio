import "./Team.css"
import Member1 from "../../Assets/Member1.jpg"
import Member2 from "../../Assets/Member2.jpg"
import Member3 from "../../Assets/Member3.jpg"


let Team = () => {


    
    return (
        <section id="team">
            <h2 className="Team-title animated">Meet Our Team</h2>
            <br />
            <div className="row Team-portfolio animated">
                <div className="col-lg-4 col-md-4">
                    <img className="bd-placeholder-img rounded-circle img_design"src={Member1} alt="Member1" />

                    <h2 className="mt-4">Heading</h2>
                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>

                </div>
                <div className="col-lg-4 col-md-4">

                    <img className="bd-placeholder-img rounded-circle img_design"  src={Member2} alt="Member2" />
                    <h2 className="mt-4">Heading</h2>
                    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>

                </div>
                <div className="col-lg-4 col-md-4">

                    <img className="bd-placeholder-img rounded-circle img_design"  src={Member3} alt="Member3" />
                    <h2 className="mt-4">Heading</h2>
                    <p>And lastly this, the third column of representative placeholder content.</p>

                </div>
            </div>
           
        </section>)
}
export default Team