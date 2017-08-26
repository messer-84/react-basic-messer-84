import React from 'react';
import {app} from '../App';

class Api {
  constructor() {
  }

  signin(url, userData) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        console.log('success');
        if (result.status === 'success') {
          app.update({user: result.message.user.name});
        }
      })
      .catch(error => console.log('Request failed', error));
  }
}

const api = new Api();

export {Api, api};
