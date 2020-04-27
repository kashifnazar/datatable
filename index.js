import React, { Component } from "react";
import { render } from "react-dom";
import Releases from './Releases'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Releases />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
