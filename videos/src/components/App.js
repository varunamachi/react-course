import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { videos: [] };

  onFormSubmit = async (term) => {
    const resp = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(resp.data.items);
    this.setState({ videos: resp.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
