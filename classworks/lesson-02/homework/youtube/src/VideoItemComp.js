import React, { Component } from 'react';


class VideoItemComp extends Component {
  constructor() {
    super();
  }

  render() {
    const url = 'https://www.youtube.com/embed/';
    const { videoThumb, videoId, videoTitle, videoDesc } = this.props;
    return (
        <li className="list-group-item">
          <div className="video-list media">
            <div className="video-list media">
              <div className="media-left">
                <img
                  alt=""
                  className="media-object"
                  src={videoThumb}
                />
              </div>
            </div>
            <div className="media-body">
              <div className="media-heading">{videoTitle}</div>
              <div>{videoDesc}</div>
            </div>
          </div>
        </li>
    );
  }
}

export default VideoItemComp;