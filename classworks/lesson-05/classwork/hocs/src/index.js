import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
window.jQuery = $;


require('jquery-ui/ui/widget');
require('jquery-ui/ui/widgets/datepicker');
require('jquery-ui/ui/widgets/dialog');


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
