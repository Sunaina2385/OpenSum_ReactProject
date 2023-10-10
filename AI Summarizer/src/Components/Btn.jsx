import React,{useState} from 'react';
import Demo from './Demo';
import TextSumm from './TextSumm';

const Btn = () => {

    const [web,setWeb]=useState(false);
    const [text,setText]=useState(false);

    const displayWeb=()=>{
        setWeb(true);
        setText(false); 
    }
    const displayText=()=>{
        setText(true);
        setWeb(false); 
    }

    return (
        <>
        <div className='flex justify-center items-center my-8'>
        <button className='black_btn btn' onClick={displayWeb}>Web Summarizer</button>
        <button className='black_btn btn' onClick={displayText}>Text-Summarizer</button>
        </div>

        {web && <Demo />}
        {text && <TextSumm />}     
        </>
    )
}

export default Btn;
