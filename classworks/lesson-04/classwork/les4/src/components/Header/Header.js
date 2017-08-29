import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { isAuthorizedState } = this.props;

    const user = localStorage.getItem('user');

    if(isAuthorizedState){
      return (
        <div className="header">
          <Link to="/">Logo</Link>
          <div>
            User: {user}
          </div>
          <ul className="menu">
            <li>
              <Link to="/signout">Sign out</Link>
            </li>
          </ul>
        </div>
      );
    }
    else{
      return (
        <div className="header">
          <Link to="/">Logo</Link>
          <div>
            User: {user}
          </div>
          <ul className="menu">
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
      );
    }

  }
}

export default Header;
