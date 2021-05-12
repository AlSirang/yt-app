import React from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ videosData, handleSelectVideo }) => {
  return (
    <div className="ui relaxed divided list">
      {videosData.map((videoDetails) => (
        <VideoCard
          key={videoDetails.id.videoId}
          videoDetails={videoDetails}
          handleSelectVideo={handleSelectVideo}
        />
      ))}
    </div>
  );
};
export default VideoList;
