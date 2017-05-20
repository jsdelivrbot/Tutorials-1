import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  /* It was originally
  VideoListITem = (prop) => {
  const video = prop.video
  };
  but we used a ES6 syntax: {video} instead to make a const video = props.video */
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list-media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );

};

export default VideoListItem;
