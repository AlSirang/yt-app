import React from "react";

class SearchBar extends React.Component {
  state = { inputValue: "" };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.inputValue);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <input
              id="searchBox"
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
              placeholder="Search a video.."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
