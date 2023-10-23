import React from 'react'
import { Routes,Route,NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
const logo="https://www.paraphraser.io/assets/frontend/images/logo.png?v=1";
import Footer from './Footer';
import Pricing from './Pricing';

const Hero = () => {
  return (
    <>
      <NavBar/>


        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/price" element={<Pricing/>}/>
        </Routes>
       
    </>
  )
}

export default Hero;
