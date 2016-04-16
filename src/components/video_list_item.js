import React from 'react';

// {video}: the props argument passed onto this component has a property called video
// so it will return video and assign it to a const name video.
const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    // whenever li gets clicked, calls onVideoSelect function and pass the current video to it
    <li onClick={ () => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">
            {video.snippet.title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
