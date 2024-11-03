import React from 'react';

const VideoBackground = ({ videoSrc, poster }) => {
  return (
    <video
      autoPlay
      muted
      loop
      className="video-container"
      poster={poster}
      onError={() => console.error("Video failed to load. Check the video source path.")}
    >
      <source src={videoSrc} type="video/mp4" />
      Sorry, your browser does not support embedded videos.
    </video>
  );
};

export default VideoBackground;
