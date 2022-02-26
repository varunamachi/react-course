import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import "./App.css";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onFormSubmit = async (term) => {
    this.setState({ selectedVideo: null });
    const resp = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: resp.data.items,
      selectedVideo: resp.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
    let details = <div></div>;
    if (this.state.videos.length > 0) {
      details = <VideoDetail video={this.state.selectedVideo}></VideoDetail>;
    }

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">{details}</div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              ></VideoList>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
