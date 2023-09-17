import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import { inject } from '@vercel/analytics';
inject();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <Analytics />
    </BrowserRouter>
  </React.StrictMode>,
)
