import Hero from './Child/Hero';
import Services from './Child/Services';
import Projects from './Child/Project';
import FAQ from "./Child/FAQ"
import './Home.css'

let Home = () => {
    return (
        <>
        <Hero/>
        <Services/>
        <Projects/>
        <FAQ/>
        </>
    )
}

export default Home;