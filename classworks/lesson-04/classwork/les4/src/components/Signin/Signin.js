import React, { Component } from 'react';

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
    };
    this.updateInput = this.updateInput.bind(this);
  }
  updateInput(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    this.setState({
        [inputName]: inputValue
    });
    console.log(this.state);

  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.updateInput}
          />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.updateInput}
          />
        </form>
      </div>
    );
  }
}

export default Signin;
