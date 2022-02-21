import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit = (event) => {
    console.log(event);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
      </div>
    );
  }
}

export default App;
