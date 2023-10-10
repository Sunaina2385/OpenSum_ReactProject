import React, { useState } from 'react'
import axios from 'axios';
import TextToPDFConverter from './BasicDocument';

const App = () => {

  const [urle, setUrl] = useState('');
  const [data,setData]=useState('');
  const [text,setText]=useState('');

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };


  const handleSubmit=async(e)=>{
    e.preventDefault();

    const options = {
      method: 'GET',
      url:'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url:urle,
        length: '3'
      },
      headers: {
        'X-RapidAPI-Key': 'cbbf7926admsh37066f3481b15ccp131578jsn2b28fabce218',
        'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setData(response.data.summary)
      setText("Summary")
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>
    <div className='flex justify-center items-center'>
      <input placeholder='Enter the Link here.....' type='url' value={urle}
      className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-500'
      onChange={handleUrlChange}
      />
      <button
            type='button'
            className='btn'
            onClick={handleSubmit}
      >Summarize</button>
    </div>

    {data ? (
    <div>
    <div className='border-black my-8 font-satoshi bg-white pt-2 px-2 text-justify w-500'>
    <p>{data}</p>
    </div>
    <TextToPDFConverter text={data}/>
    </div>
) : null} 

    <div className='translate_element'>
      
    </div>
    </>
  )
}

export default App;
