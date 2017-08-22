import React, { Component } from 'react';
import RepoItem from './repoItem';

const Button = props => {
  const { increment } = props;
  return (
    <button onClick={increment}>
      {props.children}
    </button>
  );
};

class Wrapper extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

class Header extends Component {
  // componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    // return nextProps.counter % 3 === 0;
    return true;
  }
  // componentWillUpdate() {
  //   //если shouldComponentUpdate вернул true
  // }

  render() {
    const { increment, counter } = this.props;
    console.log('counter', counter);
    
    return (
      <h1>
        <Button increment={increment} >
          INCREMENT
        </Button>
        <br/>
        Counter: {counter}
      </h1>
    );
  }
}

class Github extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const url = 'https://api.github.com/users/messer-84/repos';
    fetch(url).then(data =>
      data.json().then(data => {
        this.setState({ data: data });
      }),
    );
  }

  render() {
    return (
      <ul>
        {this.state.data.map((elem, index) => {
          return (
            <RepoItem key={index}>
              <span>
                {index}.
              </span>
              <span>
                {' '}{elem.name}
              </span>
            </RepoItem>
          );
        })}
      </ul>
    );
  }
}

const Name = props => {
  return (
    <div>
      My name is {props.name}
    </div>
  );
};

export { Github, Button, Header, Name, Wrapper };
