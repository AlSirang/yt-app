import React from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

class App extends React.Component {
  state = { videos: [], seletedVideo: null };
  handleSubmit = async (keyWord) => {
    const res = await youtube.get("/search", { params: { q: keyWord } });
    this.setState({ videos: res.data.items });
  };
  handleSelectVideo = (video) => {
    console.log(video);
  };
  render() {
    return (
      <div className="ui container" style={{ paddingTop: 10 }}>
        <SearchBar handleSubmit={this.handleSubmit} />
        <VideoList
          videosData={this.state.videos}
          handleSelectVideo={this.handleSelectVideo}
        />
      </div>
    );
  }
}

export default App;
