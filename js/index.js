import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from './components/HelloWorld.js';

import("../pkg").then(module => {
  module.run();
  const wrapper = document.getElementById("app");
  wrapper ? ReactDOM.render(<HelloWorld wasm={module}/>, wrapper) : false;
});

console.log('I\'m running and waiting for the wasm code!');
