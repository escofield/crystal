import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import zMoon from './assets/Moon.png'
import './css/App.css';

ReactDOM.render(
  <React.StrictMode>
    <div id="Grid">
      <div/>
      <div>
        <img src={zMoon} alt="The moon"/>
      </div>
    </div>
    <div id="Content">
      <App/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
