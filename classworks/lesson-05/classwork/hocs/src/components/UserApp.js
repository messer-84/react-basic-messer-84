import React, { Component } from 'react';
import Api from './api-service';

import UserSearch from './UserSearch';
import UserList from './UserList';

class UserApp extends Component {
  state = {
    users: [],
    filteredUsers: [],
  };
  filteredUsers = e => {
    console.log(this);
    console.log(e.target.value);
  };
  componentDidMount(){
    Api.getUsers().then(users => {
      console.log(users);

    });
  }
  render() {
    return (
      <div>
        <UserSearch filteredUsers={this.filteredUsers} />
        <UserList users={this.state.filteredUsers} />
      </div>
    );
  }
}

export default UserApp;
