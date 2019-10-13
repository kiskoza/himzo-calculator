import React from "react";
import ReactDOM from "react-dom";
import Calculator from './components/Calculator.js';

import("../pkg").then(module => {
  let order = module.Order.new();

  const wrapper = document.getElementById("app");
  wrapper ? ReactDOM.render(<Calculator order={order}/>, wrapper) : false;
});
