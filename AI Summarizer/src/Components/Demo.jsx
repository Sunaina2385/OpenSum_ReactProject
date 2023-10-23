import React, { useState } from 'react'
import axios from 'axios';
import TextToPDFConverter from './BasicDocument';
import './Demo.css';

const App = () => {

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

  const [urle, setUrl] = useState('');
  const [data,setData]=useState('');
  const [text,setText]=useState('');
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

    {/* {data ? (
    <div>
    <div className='border-black my-8 font-satoshi bg-white pt-2 px-2 text-justify w-500'>
    <p>{data}</p>
    </div>
    <TextToPDFConverter text={data}/>
    </div>
) : null}  */}

    <div className='textChange'>
      <div className='divtext'>
       
      <div className='divtextChange'>
          <div className='headStyle'><h1>Summarization</h1></div>
          {/* <p>{data}</p> */}
          <p className='child'>{data}</p>
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
          <p className='child'>{tdata}</p>
      </div>
          <div className='translatetext child1' onClick={translateText}>Translate</div>
      </div>
      </div>

      <TextToPDFConverter text={data}/>
    </>
  )
}

export default App;
