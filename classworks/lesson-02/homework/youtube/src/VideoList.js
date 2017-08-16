import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoListComp extends Component {
  constructor() {
    super();
  }

  render() {
    const { videoData, update } = this.props;
    return (

      <ul className="col-md-4 list-group">
        {videoData.map((elem, index) => {
          return <VideoItem
              key={index}
              videoId={elem.id.videoId}
              videoThumb={elem.snippet.thumbnails.default.url}
              videoTitle ={elem.snippet.title}
              videoDesc ={elem.snippet.description.slice(0,60)}
              update = {update}
          />;
        })}
      </ul>
    );
  }
}

export default VideoListComp;
