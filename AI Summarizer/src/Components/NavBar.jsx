import React from 'react';
import { NavLink } from 'react-router-dom';
const logo="https://www.paraphraser.io/assets/frontend/images/logo.png?v=1";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { loginWithRedirect,logout,isAuthenticated} = useAuth0();
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

            <button type="button" onClick={()=>{
              window.open("https://www.github.com")
            }} className='black_btn'>Github</button>

            <NavLink to="/price"><button type="button" className='black_btn'>Pricing</button></NavLink>

            {/* {isAuthenticated ?(<NavLink to="/">
            <button className='black_btn' onClick={() => loginWithRedirect()}>Log In</button></NavLink>):(<NavLink to="/">
            <button className='black_btn' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
            </button>
            </NavLink>)
            } */}
          
            
            <button className='black_btn' onClick={() => loginWithRedirect()}>Log In</button>
            
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar;
