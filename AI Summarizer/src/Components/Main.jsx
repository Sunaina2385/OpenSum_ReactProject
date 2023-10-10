import React from 'react';
import {Routes,Route} from 'react-router-dom';

const Home=()=>{
    return(
        <>
            <h1>Home Page</h1>
        </>
    )
}

const About=()=>{
    return(
        <>
            <h1>About Page</h1>
        </>
    )
}

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="./home" element={<Home/>}/>
        <Route path="./About" element={<About/>}/>
      </Routes>
    </>
  )
}

export default Main
