import React from 'react'
import './MidSection.css';
import Footer from './Footer';

const MidSection = () => {
  return (
    <>
      <div className='section1'>
        <div className='midSection'>
          <h1 className='headingStyle'>Summarize any text with a click of button</h1>
    
            <p className='paraStyle'>
              OpenSum Summarizer can condenses articles down to the key points instantly.Our AI uses natural language processing to locate critical information while maintaining the original context
            </p>

        <table className='tableStyle'>
          <tr>
            <td>🪄AI-powered</td>
            <td>Quickly extracts key points</td>
          </tr>
          <tr>
            <td>📕Summaizes</td>
            <td>Essays, papers and documents</td>   
          </tr>
          <tr>
            <td>💡AI modes</td>
            <td>Key Sentences and Paragraph</td>
          </tr>
          <tr>
            <td>💰100% free</td>
            <td>Unlimited Summarization</td>
          </tr>
        </table>
        </div>
      </div>

      <div className='section2'>
        <div className='mainSection'>
          <p>Wheather You have....</p>
          <div className='iconSection'>
            <div>
              <img src="https://assets.quillbot.com/images/Summarizer/newsArticle.svg" alt="News Article" width="65" height="60"></img>
              <h1>News Article</h1>
            </div>
            <div>
            <img src="https://assets.quillbot.com/images/Summarizer/researchPaper.svg" alt="News Article" width="65" height="60"></img>
              <h1>Reasearch paper</h1>
            </div>
            <div>
              <img src="https://assets.quillbot.com/images/Summarizer/confusingParagraph.svg" alt="News Article" width="65" height="60"></img>
              <h1>Confusing Paragraph</h1>
            </div>
          </div>
          <p>The Summarizer tool will help you get the information that you need</p>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default MidSection;

