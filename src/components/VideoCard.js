import React from "react";
import "./videoCard.css";

const VideoCard = ({ videoDetails, handleSelectVideo }) => {
  const { thumbnails, title, channelTitle } = videoDetails.snippet;
  return (
    <div
      className="item video-item"
      onClick={() => {
        handleSelectVideo(videoDetails);
      }}
    >
      <div>
        <img className="ui image" src={thumbnails.medium.url} alt={title} />
      </div>
      <div className="content">
        <span className="header">{title}</span>
        <div className="description">{channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoCard;
