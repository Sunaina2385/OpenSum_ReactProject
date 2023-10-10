import React from 'react';
import { NavLink } from 'react-router-dom';
const logo="https://www.paraphraser.io/assets/frontend/images/logo.png?v=1";

const NavBar = () => {
  return (
    <>
      <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
          <div className='flex'>
            <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>
            <h1 className='flex justify-center items-center text-3xl my-2 desc'>OpenSum</h1>
          </div>
          <div> 
            <NavLink to="/"><button type="button" className='black_btn'>Home</button></NavLink>
            <NavLink to="/about"><button type="button" className='black_btn'>About</button></NavLink>
            <NavLink to="/about"><button type="button" className='black_btn'>Login</button></NavLink>
            <button type="button" onClick={()=>{
              window.open("https://www.github.com")
            }} className='black_btn'>Github</button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar;
