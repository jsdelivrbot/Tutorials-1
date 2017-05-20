import React from 'react';
import VideoListItem from './video_list_item'

//We use functional component because video_list.js will not need to keep track of state.
const VideoList = (props) => {
  //videoItems is a reference to an array that contains VideoListItem components
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      key={video.etag}
      video={video} />

      //Note: key={video.etag} is just a unique identifier for <li></li>.
      //In React all <li> needs a unique key or else it bitches.
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
