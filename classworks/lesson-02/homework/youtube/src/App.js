import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Search from './Search';
import MainVideo from './MainVideo';
import VideoList from './VideoList';
import { debounce } from 'throttle-debounce';


import './App.css';
const API_KEY = `AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainVideoId: '',
      videoData: [],
    };
    this.updateData = this.updateData.bind(this);
    this.callAjax= debounce(500, this.callAjax);
    this.showVideo = this.showVideo.bind(this);

    YTSearch({ key: API_KEY, term: 'matrix' }, data => {
      this.setState({
        mainVideoId: data[0].id.videoId,
        mainVideoTitle: data[0].snippet.title,
        mainVideoDesc: data[0].snippet.description,
        videoData: data.slice(1),
      });
    });
  }

  callAjax(value){
    YTSearch({ key: API_KEY, term: value }, data => {
      this.setState({
        mainVideoId: data[0].id.videoId,
        mainVideoTitle: data[0].snippet.title,
        mainVideoDesc: data[0].snippet.description,
        videoData: data.slice(1),
      });
    });
  }
  showVideo(e){
   this.callAjax(e.target.value);
  }

  updateData(config) {
    this.setState(config);
  }

  render() {
    return (
      <main className="container">
        <Search showVideo={this.showVideo} />
        <div className="row">
          <MainVideo
            mainVideoId={this.state.mainVideoId}
            mainVideoTitle={this.state.mainVideoTitle}
            mainVideoDesc={this.state.mainVideoDesc}
          />
          <VideoList
            videoData={this.state.videoData}
            update={this.updateData}
          />
        </div>
      </main>
    );
  }
}

export default App;
