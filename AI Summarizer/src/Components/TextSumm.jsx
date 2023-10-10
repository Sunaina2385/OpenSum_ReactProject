import React, { useState } from 'react'
import axios from 'axios';

const App = () => {

  // const [data,setData]=useState('');
  // const [text,setText]=useState('');

  // const handletextChange = (e) => {
  //   setText(e.target.value);
  // };

  // const encodedParams = new URLSearchParams();
  // encodedParams.set('text',text);
  // encodedParams.set('sentnum', '5');


  /*
  const handleSubmit=async(e)=>{
    e.preventDefault();

    const options = {
        method: 'POST',
        url: 'https://textanalysis-text-summarization.p.rapidapi.com/text-summarizer-text',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'cbbf7926admsh37066f3481b15ccp131578jsn2b28fabce218',
          'X-RapidAPI-Host': 'textanalysis-text-summarization.p.rapidapi.com'
        },
        data: encodedParams,
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }

    }
*/
  return (
    <>
    <div className='flex justify-center items-center'>
      <textarea placeholder='Enter the text here.....' type='text' 
      className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500'
      // onChange={handletextChange}
      />

      <button
            type='button'
            className='btn'
            // onClick={handleSubmit}
      >Summarize</button>
    </div>

{/* 
    <div className=' border border-black my-8 font-satoshi'>
      <p>{data}</p>
    </div> */}
    </>
  )
}

export default App;
