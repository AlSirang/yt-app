import React from "react";
import "./app.css";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoPlay from "./components/VideoPlay";
import Footer from "./components/Footer";

class App extends React.Component {
  state = { videos: [], seletedVideo: null };

  handleSubmit = async (keyWord) => {
    const res = await youtube.get("/search", { params: { q: keyWord } });
    this.setState({ videos: res.data.items, seletedVideo: res.data.items[0] });
  };

  handleSelectVideo = (video) => {
    this.setState({ seletedVideo: video });
  };
  componentDidMount() {
    this.handleSubmit("nature");
  }

  render() {
    
    return (
      <div className="app-container">
        <div style={{ paddingTop: 10, paddingBottom: 10 }}>
          <SearchBar handleSubmit={this.handleSubmit} />
        </div>
        <div className="ui stackable grid">
          <div className="ten wide column">
            <VideoPlay video={this.state.seletedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              videosData={this.state.videos}
              handleSelectVideo={this.handleSelectVideo}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
