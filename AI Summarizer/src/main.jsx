import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import About from './Components/About.jsx';
import './Components/MidSection.css';
// import Card from './Components/Card.jsx';
import Pricing from './Components/Pricing.jsx';
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Auth0Provider
    domain="dev-tgj34tvwrnc7qf6c.us.auth0.com"
    clientId="7oBFh3emCC7rJNhV5dB5DLpklR9ZLVFv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <React.StrictMode>
          <App />
    </React.StrictMode>
    </BrowserRouter>
  </Auth0Provider>,
)
