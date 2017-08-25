import React, { Component } from 'react';
import { Api, api } from '../../services/api';

class Signin extends Component {
  constructor() {
    super();
    this.url = 'http://api.jyotish.gift/api/v1/auth/login';
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  updateInput(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    this.setState({
      [inputName]: inputValue,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const url = 'http://api.jyotish.gift/api/v1/auth/login';
    var userData = {};
    for (const field in this.refs) {
      userData[field] = this.refs[field].value;
    }
    api.signin(this.url, userData);
  }

  render() {
    return (
      <div className="sign-block">
        <h1>Sign in</h1>
        <form onSubmit={this.handleSubmit}>
          <ul className="form-list">
            <li>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.updateInput}
                ref="user"
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={this.updateInput}
                ref="password"
              />
            </li>
            <li>
              <button>Sign in</button>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default Signin;
