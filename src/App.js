import './App.css';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import { Routes,Route } from 'react-router';
import Home_page from './pages/Home_page';
import Project_page from './pages/Project_page';
import About_page from './pages/About_page';
import Contact_page from './pages/Contact_page';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, delay: 500 });
  }, []);
  return (
    <div className=" bg-[#282C33]">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home_page/>} />
        <Route path="/projects" element={<Project_page />} />
        <Route path="/about" element={<About_page />} />
        <Route path="/contact" element={<Contact_page />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
