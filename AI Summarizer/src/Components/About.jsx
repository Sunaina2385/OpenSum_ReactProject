import React,{useState} from 'react'
import axios from 'axios';
import './About.css';
import Footer from './Footer';
import VideoPlayer from './video';

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

            <div className='aboutSection'>
                <p className='text-lg text-gray-700 mb-4'>
                {/* OpenSum is a web application that summarizes articles and translates
                them into different languages. It also provides a few other features like
                getting jokes and facts. Later on, I will add more features like the
                ability to download summarized text as a PDF and upload PDF files for
                summarization. */}
                Sharly AI summarizer is an advanced tool powered by artificial intelligence technology that provides concise summaries of any document or article. No more trawling through pages of information to extract key points. Just upload your document - and let the AI do the work. The AI summarizer reads through the text, identifies the main themes and the most essential details, and produces a summary that captures the document's essence. This AI tool simplifies document comprehension, allowing you to save time and effort. With Sharly's AI summarizer, the tedious process of summarizing lengthy documents is the past.
                </p>
            </div>
            
            <div className='feaSection'>
                <div className='featureSec'>
                    <h1>Accurate AI Summary</h1>
                    <p>Sharly's AI summarizer is not just a simple AI tool; it's a sophisticated technology capable of discerning key points from complex documents accurately. Whether you're dealing with a research paper or a business report, you can rely on Sharly for a comprehensive, accurate summary.</p>
                </div>
                <div className='featureSec'>
                    <h1>Time Efficiency</h1>
                    <p>Using Sharly's AI to summarize articles or documents greatly cuts down the time you spend on reading and understanding lengthy texts. This saved time can then be redirected to other productive tasks, boosting your overall efficiency.</p>
                </div>
                <div className='featureSec'>
                    <h1>Versatility and Convenience</h1>
                    <p>Sharly supports various document formats, including .pdf, .docx, .doc, .txt, .csv, .rtf, and .html files. This means you can utilize the AI summary feature across a wide range of documents, providing a consistent and convenient solution for your information extraction needs.</p>
                </div>
            </div>
            
        

            <div className='videosec'>
                <h1 className='orange_gradient'>How Does This Summarizing Tool Work?</h1>
                <VideoPlayer/>
            </div>

            <div className='extraFea'>
                <div className='extrafeah1'>
                    <h1 className='orange_gradient'>Get Your Fun On</h1>
                </div>

                <div className='extrafeadivcomplex'>
                    <div className='border border-gray-300 p-4 rounded-lg m-5 extrafeadiv'>
                        <div onClick={displayJoke}>
                            <p className='heading'>Make Me Laugh</p>
                        </div>
                        <p className='mt-2 text-gray-700 joke' >{Joke}</p>
                    </div>

                    <div className='border border-gray-300 p-4 rounded-lg extrafeadiv'>
                        <div onClick={displayFact}>
                            <p className='heading'>Get Me Facts</p>    
                        </div>
                        <p className='mt-2 text-gray-700 joke'>{Fact}</p>
                    </div>

                </div>
            </div>
            <Footer/>
        {/* <video controls>
            <source src="./video/video.mp4" type="video/mp4" />
        </video> */}
    </>
  )
}

export default About;
