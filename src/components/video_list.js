import React from 'react';

// props = properties passed to VideoList
// in functional components, props are arguments
const VideoList = (props) => {
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
};

export default VideoList;
