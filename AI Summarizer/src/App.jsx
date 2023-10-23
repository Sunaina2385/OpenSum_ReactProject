import React from 'react'
// import Demo from './Components/Demo';
import Hero from './Components/Hero';
import Btn from './Components/Btn';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer'; 


const App = () => {
  return (
    <>
      <main>
        
        <div className='main'>
          <div className='gradient'>

          </div>
        </div>

        <div className='app'>
          <Hero/>
          {/* <Demo/> */}
        </div>

      </main>
    </>
  ) 
}

export default App;


