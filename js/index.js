import("../pkg").then(module => {
  module.run();
});

console.log('I\'m running and waiting for the wasm code!');
