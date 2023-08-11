import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import AboutUs from './Components/about us/AboutUs';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home/>
        <AboutUs/>
      </BrowserRouter>
    </div>
  );
}

export default App;