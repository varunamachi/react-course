import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = {
    lat: null,
    err: null,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({ lat: position.coords.latitude });
        },
        (error) => this.setState({ err: error })
      );
    }, 1000);
  }

  render() {
    return <div className="border red">{this.content()}</div>;
  }

  content() {
    if (this.state.err) {
      return <div>Error: {this.state.err?.message} </div>;
    } else if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}></SeasonDisplay>;
    }
    return <Spinner message="loading"></Spinner>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
