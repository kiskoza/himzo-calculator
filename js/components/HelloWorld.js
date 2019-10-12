import React, { Component } from "react";
import ReactDom from "react-dom";

class HelloWorld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wasm: props.wasm,
    }
  }

  render() {
    return (
      <p>{this.state.wasm.count()}</p>
    );
  }
}

export default HelloWorld;
