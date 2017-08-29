import React, { Component } from 'react';

class Signup extends Component {
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
    const { state, signUp } = this.props;

    return (
      <div>
        <h1>Sign Up</h1>
        <div className="sign-block">
          <form
            onSubmit={
              (e) => {
                e.preventDefault();
                signUp(this.refs);
              }
            }
          >
            <ul className="form-list">
              <li>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={this.updateInput}
                  ref="email"
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
              <label htmlFor="confirmPassword">Confirm password:</label>
              <li>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={this.updateInput}
                  ref="confirmPassword"
                />
              </li>
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
                <button>Sign up</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
