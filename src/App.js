import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import AboutUs from './Components/about us/AboutUs';
import Team from './Components/team/Team';
import Footer from './Components/footer/Footer';
import Services from './Components/services/Services';
import Projects from './Components/projects/Project';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home/>
        <AboutUs/>
        <Team/>
        <Services/>
        <Projects/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;