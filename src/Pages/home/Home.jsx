import Hero from './Child/Hero';
import Services from './Child/Services';
import Projects from './Child/Project';
import FAQ from "./Child/FAQ"
import './Home.css'
import AboutUs from './Child/AboutUs';

let Home = () => {
    return (
        <>
        <Hero/>
        <AboutUs/>
        <Services/>
        <Projects/>
        <FAQ/>
        </>
    )
}

export default Home;