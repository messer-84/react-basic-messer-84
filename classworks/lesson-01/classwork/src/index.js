import React from 'react';
import ReactDOM from 'react-dom';


const mountNode = document.querySelector('.app');
let someArray = ['Angular', 'Vue', 'React'];
const state = {
  count: 0
};

const Hello = props => {
  return (
    <div>
      <h1>{props.name} : {props.lang}</h1>
      <div>Privet</div>
      <div>{props.count}</div>
      <ul>
        {someArray.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
};


setInterval(function () {
  state.count++;
  ReactDOM.render(<Hello name="Maksim9" lang="en" count={state.count}/>, mountNode);

}, 1000);



