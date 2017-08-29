import React, { Component } from 'react';
import './theme/App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Api from './services/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      isAuthorized: false,
      userToken: ''
    };
    this.signUp = this.signUp.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);

  }
  componentDidMount() {
    // Api.getUsers().then(user => {
    //   console.log(user);
    //
    // });
  }
  signOut(){
    this.setState({
      user: '',
      isAuthorized: false,
      userToken: ''
    });
    localStorage.removeItem('user');
    localStorage.setItem('isAuthorized', false);

  }
  signUp(formData) {
    var userData = {};
    for (const field in formData) {
      if (field !== 'confirmPassword') {
        userData[field] = formData[field].value;
      }
    }

    //user=maks92//email=test92@test.com//pass=1234
    Api.signUpUser(userData);
  }
  signIn(formData) {
    var userData = {};
    for (const field in formData) {
      userData[field] = formData[field].value;
    }
    Api.signInUser(userData).then(result => {
      console.log(result);

      if (result.status === 'success') {
        this.setState({
          user: userData.user,
          isAuthorized: true,
          userToken: result.message.token,
        });
        localStorage.setItem('user', userData.user);
        localStorage.setItem('token', result.message.token);
        localStorage.setItem('isAuthorized', true);
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header state={this.state} />
        <Main state={this.state} signUp={this.signUp} signIn={this.signIn} signOut={this.signOut} />
      </div>
    );
  }
}

export default App;
