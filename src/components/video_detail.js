import React from 'react';

// {video}: the props argument passed onto this component has a property called video
// so it will return video and assign it to a const name video.
const VideoDetail = ({video}) => {

  // since we dont know when the props video will be returned
  // we must check if there is a video, otherwise it will throw an error.
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
