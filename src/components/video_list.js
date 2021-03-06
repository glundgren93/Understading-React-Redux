import React from 'react';
import VideoListItem from './video_list_item';

// props = properties passed to VideoList
// in functional components, props are arguments
const VideoList = (props) => {

  // Create new array containing each video inside a VideoListItem
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        // receive property from App and passes it to VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
