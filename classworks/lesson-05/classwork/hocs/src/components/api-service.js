class Api {
  constructor(){
    this.headers = {

    };
    this.url = 'https://api.randomuser.me/?nat=us.gb&results=50'
  }
  getUsers(){
    return fetch(this.url).then(data=>data.json());
  }
  // fetch(url, body){
  //   return fetch(this.url + url, body).then(response => response.json())
  // }
}

export default new Api();