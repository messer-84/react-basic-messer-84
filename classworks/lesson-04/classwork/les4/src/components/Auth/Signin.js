import React, { Component } from 'react';
import Api from '../../services/api';

class Signin extends Component {
  constructor() {
    super();
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    this.setState({
      [inputName]: inputValue,
    });
  }

  render() {
    const { signIn } = this.props;
    return (
      <div className="sign-block">
        <h1>Sign in</h1>
        <form onSubmit={(e) => {
          e.preventDefault();
          signIn(this.refs);
        }}>
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
