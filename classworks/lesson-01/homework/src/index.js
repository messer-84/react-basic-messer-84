import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css'
import UserItem from './UserItem'
import users from './users'

const mountNode = document.querySelector('.app');


const UserList = props => {
	const users = props.users;

	const correctBirthdate = (date) => {
		let newBD = date.split('-');
		return `${newBD[2]}-${newBD[1]}-${newBD[0]}`;
	};

	return (
			<div className="user-list-holder">
				<div className="user-list">
					{users.map((user, index) => {
						return (<UserItem
								key={index}
								avatarUrl={user.avatarUrl}
								fullName={user.fullName}
								birthdate={correctBirthdate(user.birthdate)}
								gender={user.gender}
								address={user.address}
								email={user.email}
						/>)
					})}
				</div>
				<button onClick={addUsers} id="add">Больше пользователей</button>
			</div>
	)
};

const addUsers = (e) => {
	e.preventDefault();
	const newUsers = users.concat(users);

	ReactDOM.render(<UserList users={newUsers} />, mountNode);

};

ReactDOM.render(<UserList users={users} />, mountNode);



