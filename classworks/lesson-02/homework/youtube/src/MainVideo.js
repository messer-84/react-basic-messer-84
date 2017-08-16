import React, { Component } from 'react';

class MainVideo extends Component {
  constructor() {
    super();
  }

  render() {
    const url = 'https://www.youtube.com/embed/';
    const { mainVideoId, mainVideoTitle, mainVideoDesc } = this.props;

    return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe title="random" src={url + mainVideoId} />
        </div>

        <div className="details">
          <h2 className="main-video-title">
            {mainVideoTitle}
          </h2>
          <div className="main-video-desc">
            {mainVideoDesc}
          </div>
        </div>
      </div>
    );
  }
}

export default MainVideo;
