import React, { Component } from 'react';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const url = 'http://api.jyotish.gift/api/v1/auth/signup';
    var userData = {};
    for (const field in this.refs) {
      if (field !== 'confirmPassword') {
        userData[field] = this.refs[field].value;
      }
    }
    //user=maksim84//email=test84@test.com//pass=1234
    console.log(userData);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        console.log(result);
        if (result.status === 'success') {
        }
      })
      .catch(function(error) {
        console.log('Request failed', error);
      });
  }

  updateInput(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    this.setState({
      [inputName]: inputValue,
    });
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div className="sign-block">
          <form onSubmit={this.handleSubmit}>
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
