import React,{useState} from 'react'
import axios from 'axios';

const About = () => {

    const [Joke,setJoke]=useState('');
    const [Fact,setFact]=useState('');
    const displayJoke= async(e)=>{

        e.preventDefault();

        const options = {
            method: 'GET',
            url: 'https://joke-generator-api.p.rapidapi.com/api/random-joke/math',
            headers: {
              'X-RapidAPI-Key': 'cbbf7926admsh37066f3481b15ccp131578jsn2b28fabce218',
              'X-RapidAPI-Host': 'joke-generator-api.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setJoke(response.data.joke.text);
              console.log(response.data.joke.text);
          } catch (error) {
              console.error(error);
          }
    }

    const displayFact=async(e)=>{
        e.preventDefault();

        const options = {
            method: 'GET',
            url: 'https://numbersapi.p.rapidapi.com/random/trivia',
            params: {
              min: '10',
              max: '20',
              fragment: 'true',
              json: 'true'
            },
            headers: {
              'X-RapidAPI-Key': 'cbbf7926admsh37066f3481b15ccp131578jsn2b28fabce218',
              'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setFact(response.data.text);
              console.log(response.data.text);
          } catch (error) {
              console.error(error);
          }
    }

    return (
    <>
    
    <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden'/><span className='orange_gradient'>OpenSum</span></h1>

            <div className='bg-white rounded-lg shadow-lg p-8 w-3/4 text-center my-7'>
                <p className='text-lg text-gray-700 mb-4'>
                OpenSum is a web application that summarizes articles and translates
                them into different languages. It also provides a few other features like
                getting jokes and facts. Later on, I will add more features like the
                ability to download summarized text as a PDF and upload PDF files for
                summarization.
                </p>

            <div className='flex justify-center space-x-4'>
                <div className='border border-gray-300 p-4 rounded-lg'>
                    <button
                    onClick={displayJoke}
                    className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
                    >
                    Make Me Laugh
                    </button>
                    <p className='mt-2 text-gray-700'>{Joke}</p>
                </div>

                <div className='border border-gray-300 p-4 rounded-lg'>
                    <button
                    onClick={displayFact}
                    className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded'
                    >
                    Get Me Facts
                    </button>
                    <p className='mt-2 text-gray-700'>{Fact}</p>
                    </div>
                </div>
            </div>

        {/* <video controls>
            <source src="./video/video.mp4" type="video/mp4" />
        </video> */}
    </>
  )
}

export default About;
