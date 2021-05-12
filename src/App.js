import React from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  // constructor() {}
  handleSubmit = async (keyWord) => {
    console.log(keyWord);
    const res = await youtube.get("/search", { q: keyWord });
    console.log(res);
  };

  render() {
    return (
      <div className="ui container" style={{ paddingTop: 10 }}>
        <SearchBar handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
