import React, { useState } from 'react'
import axios from 'axios';
import TextSummarizer from './TextSummarizer';
import './Demo.css';

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


  
const countries = {
  "am-ET": "Amharic",
  "ar-SA": "Arabic",
  "be-BY": "Bielarus",
  "bem-ZM": "Bemba",
  "bi-VU": "Bislama",
  "bjs-BB": "Bajan",
  "bn-IN": "Bengali",
  "bo-CN": "Tibetan",
  "br-FR": "Breton",
  "bs-BA": "Bosnian",
  "ca-ES": "Catalan",
  "cop-EG": "Coptic",
  "cs-CZ": "Czech",
  "cy-GB": "Welsh",
  "da-DK": "Danish",
  "dz-BT": "Dzongkha",
  "de-DE": "German",
  "dv-MV": "Maldivian",
  "el-GR": "Greek",
  "en-GB": "English",
  "es-ES": "Spanish",
  "et-EE": "Estonian",
  "eu-ES": "Basque",
  "fa-IR": "Persian",
  "fi-FI": "Finnish",
  "fn-FNG": "Fanagalo",
  "fo-FO": "Faroese",
  "fr-FR": "French",
  "gl-ES": "Galician",
  "gu-IN": "Gujarati",
  "ha-NE": "Hausa",
  "he-IL": "Hebrew",
  "hi-IN": "Hindi",
  "hr-HR": "Croatian",
  "hu-HU": "Hungarian",
  "id-ID": "Indonesian",
  "is-IS": "Icelandic",
  "it-IT": "Italian",
  "ja-JP": "Japanese",
  "kk-KZ": "Kazakh",
  "km-KM": "Khmer",
  "kn-IN": "Kannada",
  "ko-KR": "Korean",
  "ku-TR": "Kurdish",
  "ky-KG": "Kyrgyz",
  "la-VA": "Latin",
  "lo-LA": "Lao",
  "lv-LV": "Latvian",
  "men-SL": "Mende",
  "mg-MG": "Malagasy",
  "mi-NZ": "Maori",
  "ms-MY": "Malay",
  "mt-MT": "Maltese",
  "my-MM": "Burmese",
  "ne-NP": "Nepali",
  "niu-NU": "Niuean",
  "nl-NL": "Dutch",
  "no-NO": "Norwegian",
  "ny-MW": "Nyanja",
  "ur-PK": "Pakistani",
  "pau-PW": "Palauan",
  "pa-IN": "Panjabi",
  "ps-PK": "Pashto",
  "pis-SB": "Pijin",
  "pl-PL": "Polish",
  "pt-PT": "Portuguese",
  "rn-BI": "Kirundi",
  "ro-RO": "Romanian",
  "ru-RU": "Russian",
  "sg-CF": "Sango",
  "si-LK": "Sinhala",
  "sk-SK": "Slovak",
  "sm-WS": "Samoan",
  "sn-ZW": "Shona",
  "so-SO": "Somali",
  "sq-AL": "Albanian",
  "sr-RS": "Serbian",
  "sv-SE": "Swedish",
  "sw-SZ": "Swahili",
  "ta-LK": "Tamil",
  "te-IN": "Telugu",
  "tet-TL": "Tetum",
  "tg-TJ": "Tajik",
  "th-TH": "Thai",
  "ti-TI": "Tigrinya",
  "tk-TM": "Turkmen",
  "tl-PH": "Tagalog",
  "tn-BW": "Tswana",
  "to-TO": "Tongan",
  "tr-TR": "Turkish",
  "uk-UA": "Ukrainian",
  "uz-UZ": "Uzbek",
  "vi-VN": "Vietnamese",
  "wo-SN": "Wolof",
  "xh-ZA": "Xhosa",
  "yi-YD": "Yiddish",
  "zu-ZA": "Zulu"
}


const [tstxt,setTstxt]=useState('');
const [tdata,setTdata]=useState('');

const handleUrlChange = (e) => {
  setUrl(e.target.value);
};

const handleSelect = (e) => {
  setTstxt(e.target.value);
};




const translateText=async(e)=>{
  e.preventDefault();
const options = {
method: 'POST',
url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
params: {
  'to[0]': countries[tstxt],
  'api-version': '3.0',
  profanityAction: 'NoAction',
  textType: 'plain'
},
headers: {
  'content-type': 'application/json',
  'X-RapidAPI-Key': 'cbbf7926admsh37066f3481b15ccp131578jsn2b28fabce218',
  'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
},
data: [
  {
    Text:"I would really like to drive your car around the block a few times.",
  }
]
};

try {
const response = await axios.request(options);
console.log(response.data);
setTdata(response.data)
} catch (error) {
console.error(error);
}
}

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


    <div className='textChange'>
      <div className='divtext'>
       
      <div className='divtextChange'>
          <div className='headStyle'><h1>Summarization</h1></div>
          {/* <p>{data}</p> */}
          {/* <p className='child'>{data}</p> */}
      </div>

        <div className='translatediv'>
          <h1>Select Language:</h1>
          <select className='translatetext' onChange={handleSelect}>
            {Object.keys(countries).map((key) => (
            <option key={key} value={key}>
              {countries[key]}
            </option>
          ))}
          </select>
        </div>
      </div>

      <div className='divtext'>
        
      <div className='divtextChange'>
        <div className='headStyle'><h1>Translation</h1></div>
          {/* <p>{data}</p> */}
          {/* <p className='child'>{tdata}</p> */}
      </div>
          <div className='translatetext child1' onClick={translateText}>Translate</div>
      </div>
      </div>

    
{/* 
    <div className=' border border-black my-8 font-satoshi'>
      <p>{data}</p>
    </div> */}
    </>
  )
}

export default App;
