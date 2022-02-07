import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const projectName = 'markdown-previewer';
const env = 'LOCAL'    // LOCAL | CLOUD
const dirName = 'Markdown-Previewer'
const cloudPath = 'https://raw.githubusercontent.com/louisyoungx/freeCodeCamp-projects/master/' + dirName + '/img/';
// window.projectName = projectName
(function cloudPics() {
    function chore() {
        document.querySelectorAll('img').forEach(img => {
            console.log(img.getAttribute('src'))
            let src = img.getAttribute('src').replace('./img/', cloudPath)
            img.setAttribute('src', src)
        });
    }
    if (env === 'CLOUD') {
        chore()
    }
})()
