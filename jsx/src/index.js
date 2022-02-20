import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <label class="label" htmlFor="name">
        Name:{" "}
      </label>
      <input type="text" id="name"></input>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};

ReactDOM.render(<App></App>, document.querySelector("#root"));
