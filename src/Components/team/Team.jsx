import "./Team.css"
import Member1 from "../../Assets/Member1.jpg"
import Member2 from "../../Assets/Member2.jpg"
import Member3 from "../../Assets/Member3.jpg"

let Team = () => {
    return (
        <>
            <h2 className="Team-title">Meet Our Team</h2>
            <br />
            <div className="row Team-portfolio">
                <div className="col-lg-4">
                    <img className="bd-placeholder-img rounded-circle" width="250" height="250" src={Member1} alt="Member1" />

                    <h2 className="mt-4">Heading</h2>
                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>

                </div>
                <div className="col-lg-4">

                    <img className="bd-placeholder-img rounded-circle" width="250" height="250" src={Member2} alt="Member2" />
                    <h2 className="mt-4">Heading</h2>
                    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>

                </div>
                <div className="col-lg-4">

                    <img className="bd-placeholder-img rounded-circle" width="250" height="250" src={Member3} alt="Member3" />
                    <h2 className="mt-4">Heading</h2>
                    <p>And lastly this, the third column of representative placeholder content.</p>

                </div>
            </div>
        </>)
}
export default Team