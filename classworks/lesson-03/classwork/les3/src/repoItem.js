import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class RepoItem extends Component {
  render() {
    return (
      <li className="item">
          {this.props.children}
      </li>
    );
  }
}

export default RepoItem;
