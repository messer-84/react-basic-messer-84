import React from 'react';
import App from '../App';

class Api {
  constructor() {
    this.headers = {

    };
    this.url = 'http://api.jyotish.gift/api/v1/auth/';
  }
  signUpUser(userData){
    return fetch(this.url + 'signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json());


  }
  getUser(){
    return fetch(this.url).then(data=>data.json());
  }

  signInUser(userData) {
    return fetch(this.url + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
  }
}

export default new Api();
