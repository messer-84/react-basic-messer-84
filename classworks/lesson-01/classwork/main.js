

const funcElement = (value) =>
  React.createElement('div', null, value);



const Tree = React.createElement(
  'div',
  null,
    React.createElement('h1', null, 'Hello'),
    React.createElement('h2', null, 'Hello2')
);


const helloWorld = React.createElement('h1', null, 'Hello world');

ReactDOM.render(funcElement('Пока'), document.querySelector('.app'));