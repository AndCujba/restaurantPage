
import About from "./About";
import Restaurant from "./Restaurant";
import Home from "./Home"; //in caz ca vreau sa fie tot siteul pe o pagina
import Navbar from "./Navbar";
import SignUp from "./SignUp";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";



function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />}/>
        <Route path="/restaurantPage" element={<HeroSection />}/>  {/* for Github Pages to view homepage route*/}
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/despre-noi" element={<About/>}/>
        <Route path="/restaurant" element={<Restaurant/>}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
    
    </>
  );
}

export default App;
 