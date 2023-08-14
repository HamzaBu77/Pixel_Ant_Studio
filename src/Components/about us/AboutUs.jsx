import "./AboutUs.css"
import founder from "../../Assets/founder.jpg"


let AboutUs = () => {
   
    return (
        <section id="about">
        <div className="about-section">
            <span className="about-title">About founder</span>
            <h3 className="about-heading">Get to know him</h3>
            <div className="row featurette ">
                <div className="col-md-6 about-description">
                    <h1 className="featurette-heading animation">Meet <span>Mr. Muhammad Zubair</span></h1>
                    <h3 className="lead"> An accomplished Interior Designer and dedicated 3D Artist. With a passion for transforming spaces, He specialize in creating captivating and functional environments that truly resonate. His portfolio includes a diverse range of styles, including Contemporary, Apartment-specific, Ikea-inspired, and Open Concept designs. Beyond kitchens, He possess the skills to elevate every corner of your home. From luxurious bathroom designs that exude relaxation to personalized bedroom and living room concepts that capture your essence. His journey has been enriched by collaborating with esteemed designers from around the world, including partnerships with American and Italian creatives through his career.</h3>
                    <div className=" details">
                        <div>
                            <p className="details_color">Email:</p>
                            <p className="bold">pixelantstudio@gmail.com</p>
                        </div>
                        <div >
                            <p className="details_color">From:</p>
                            <p className="bold">Lahore,Pakistan</p>
                        </div>
                        <div>
                            <p className="details_color">Contact:</p>
                            <p className="bold">(+92)300-4525123</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 about-photo">
                    <img className="rounded-circle" src={founder} alt="home png" />
                </div>

            </div>
          
        </div>
             
         </section>
        
    )
}
export default AboutUs;