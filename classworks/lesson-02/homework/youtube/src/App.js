import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchComp from './SearchComp';
import MainVideoComp from './MainVideoComp';
import VideoListComp from './VideoListComp';

import './App.css';
const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainVideoId: '',
      videoData: [],
    };

    YTSearch({ key: API_KEY, term: 'matrix' }, data => {
      this.setState({
        mainVideoId: data[0].id.videoId,
        mainVideoTitle: data[0].snippet.title,
        mainVideoDesc: data[0].snippet.description,
        videoData: data.slice(1),
      });
    });
  }
  render() {
    // console.log(this.state.videoData);

    return (
      <main className="container">
        {/*<div>{this.state.videoData}</div>*/}
        <SearchComp />
        <div className="row">
          <MainVideoComp
              mainVideoId={this.state.mainVideoId}
              mainVideoTitle={this.state.mainVideoTitle}
              mainVideoDesc = {this.state.mainVideoDesc}
          />
          <VideoListComp videoData = {this.state.videoData}/>
        </div>
      </main>
    );
  }
}

export default App;
