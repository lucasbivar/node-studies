// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

//install with dev dependecy
// npm i nodemon -D

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// npm install - install all dependencies

// npm uninstall packageName - uninstall specific package

//https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/

const _ = require("lodash");

const items = [1, [2, [3,[4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);