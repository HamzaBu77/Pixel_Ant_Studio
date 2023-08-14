import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import AboutUs from './Components/about us/AboutUs';
import Team from './Components/team/Team';
import Footer from './Components/footer/Footer';
import Services from './Components/services/Services';
import Projects from './Components/projects/Project';
import FAQ from "./Components/FAQ/FAQ"
import Contact from './Components/contact us/ContactUs';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
        <Home />
        <AboutUs />
        <Team />
        <Services />
        <Projects />
        <FAQ />
        <Contact />
        <Footer />
     
    </div>
  );
}

export default App;