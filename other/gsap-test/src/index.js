import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Navigation from './components/Navigation';
// import AppSecond from './AppSecond';

//onready
ReactDOM.render(
    <Navigation />,
  document.getElementById('root'),
);

//onclick
//ReactDOM.render(<AppSecond title="box"/>, document.getElementById('root'));
