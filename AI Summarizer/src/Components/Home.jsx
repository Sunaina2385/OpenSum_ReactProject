import React from 'react'
import Btn from './Btn';
import MidSection from './midSection';

const Home = () => {
  return (
    <>
      <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden'/>
      <span className='orange_gradient'>OpenAI  GPT-4</span>
      </h1>
        <h2 className='desc'>
        SnapSum is a free tool that summarizes articles, Web pages for you and allows you to share them with your friends and colleagues.
        <h1 className='blue_gradient'>Save time and get the gist!</h1>
        </h2>
        <Btn/>
        <MidSection/>
    </>
  )
}

export default Home;
