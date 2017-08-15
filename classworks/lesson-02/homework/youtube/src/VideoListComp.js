import React, { Component } from 'react';
import VideoItemComp from './VideoItemComp';

class VideoListComp extends Component {
  constructor() {
    super();
  }

  render() {
    const { videoData } = this.props;
    console.log('video-data', videoData);
    console.log(this.props);

    return (
      <ul className="col-md-4 list-group">
        {videoData.map((elem, index) => {
          return <VideoItemComp
              key={index}
              videoId={elem.id.videoId}
              videoThumb={elem.snippet.thumbnails.default.url}
              videoTitle ={elem.snippet.title}
              videoDesc ={elem.snippet.description}
          />;
        })}
      </ul>
    );
  }
}

export default VideoListComp;
