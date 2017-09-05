import React, { Component } from 'react';
import { connect } from 'react-redux';
import faker from 'faker';

class Chat extends Component {
  render() {
    console.log(this.props);
    const { users, addNewUser } = this.props;
    const rndUsername = `@${faker.internet.userName().toLowerCase()}`;
    return (
      <div>
        <h3>Chat</h3>
				<button onClick={()=>{addNewUser(rndUsername)}}>add new user</button>
        <hr />
        {users.map(user =>
          <p key={user}>
            {user}
          </p>,
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
	return {
		users: state
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		addNewUser: (username) => dispatch({type: 'ADD_NEW_USER', username})
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
