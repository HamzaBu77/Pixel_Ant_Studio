import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../Components/navbar/Navbar';
import Footer from '../Components/footer/Footer';
import Home from '../Pages/home/Home';
import Login from '../Pages/Auth/SignIn';
import Signup from '../Pages/Auth/SignUp';
import Contact from "../Pages/contact us/ContactUs"
import AboutUs from '../Pages/about us/AboutUs';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/"  element={<Home/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/about"  element={<AboutUs/>} />
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;