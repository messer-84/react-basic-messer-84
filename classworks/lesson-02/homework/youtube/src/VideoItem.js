import React, { Component } from 'react';

class VideoItem extends Component {
  render() {
    const {
      videoThumb,
      videoId,
      videoTitle,
      videoDesc,
      update,
    } = this.props;
    return (
      <li
        className="list-group-item"
        onClick={() => {
          update({
            mainVideoId: videoId,
            mainVideoTitle: videoTitle,
            mainVideoDesc: videoDesc,
          });
        }}
      >
        <div className="video-list media media-holder">
          <div className="video-list media img-wrap">
            <div className="media-left">
              <img alt="" className="media-object" src={videoThumb} />
            </div>
          </div>
          <div className="media-body">
            <h3 className="media-heading">
              {videoTitle}
            </h3>
            <div>
              {videoDesc}
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoItem;
