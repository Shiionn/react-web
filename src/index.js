import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';//вытаскиваем из библиотеки react-router-dom компонент BrowserRouter и назовем его router 
import './index.scss';
import 'macro-css'
//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <Router>
      <App />
    </Router>

  </React.StrictMode>
);


