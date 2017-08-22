import React from 'react';
import ReactDOM from 'react-dom';
import './theme/index.css';
import App from './App';
import registerServiceWorker from './services/registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';


const render = Component => {
  ReactDOM.render(
    <Router>
    <Component />
    </Router>,
    document.getElementById('root')
  )
};

if(module.hot){
  module.hot.accept('./App', () => {
    render(App)
  })
}

render(App);

registerServiceWorker();
