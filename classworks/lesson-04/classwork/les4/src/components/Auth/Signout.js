import React, { Component } from 'react';

class Signout extends Component {
  render() {
    const { signOut } = this.props;

    return (
      <div>
        <h1>Signout</h1>
        <button onClick={(e) => {
          e.preventDefault();
          signOut();
        }}>Signout</button>
      </div>
    );
  }
}

export default Signout;
