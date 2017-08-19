import React, { Component } from 'react';
import RepoItem from './repoItem';

class Button extends Component {
  constructor() {
    super();

  }

  // shouldComponentUpdate(prevState, nextState) {
  //   return false;
  // }
  render() {
    const { counterFunc } = this.props;

    return (
      <button onClick={counterFunc}>Button</button>
    );
  }
}
class Header extends Component {
  // shouldComponentUpdate(prevState, nextState) {
  //   return false;
  // }

  render() {
    return (
      <h1>
        {this.props.counter}
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

export  {Github, Button, Header};
