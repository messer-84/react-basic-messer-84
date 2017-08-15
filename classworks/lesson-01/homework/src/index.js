import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import UserItem from './UserItem';
import users from './users';

let myUsersArray = users;

const mountNode = document.querySelector('.app');

const UserList = props => {
  const usersArr = props.users;

  const correctBirthdate = date => date.split('-').reverse().join('-');

  return (
    <div className="user-list-holder">
      <div className="user-list">
        {usersArr.map((user, index) => {
          return (
            <UserItem
              key={index}
              avatarUrl={user.avatarUrl}
              fullName={user.fullName}
              birthdate={correctBirthdate(user.birthdate)}
              gender={user.gender}
              address={user.address}
              email={user.email}
            />
          );
        })}
      </div>
      <button onClick={addUsers} id="add">
        Больше пользователей
      </button>
    </div>
  );
};

const addUsers = e => {
  e.preventDefault();
  if (myUsersArray.length > 5) {
    myUsersArray = [...myUsersArray, ...myUsersArray.slice(-3)];
  } else {
    myUsersArray = [...myUsersArray, ...myUsersArray];
  }

  ReactDOM.render(<UserList users={myUsersArray} />, mountNode);
};

ReactDOM.render(<UserList users={myUsersArray} />, mountNode);
