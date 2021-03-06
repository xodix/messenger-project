import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// tests
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './tests/reportWebVitals'
// reportWebVitals(console.log)
// service worker
registerServiceWorker();