import React from 'react';
import ReactDOM from 'react-dom';

//import Layout from './components/layout';
// import BasicExample from './router/basic';
// import ParamsExample from './router/params';
import AuthExample from './router/auth';

const app = document.getElementById('app');

// ReactDOM.render(<BasicExample/>,app);
// ReactDOM.render(<ParamsExample/>,app);
ReactDOM.render(<AuthExample/>,app);