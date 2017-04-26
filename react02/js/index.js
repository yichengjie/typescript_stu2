"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Hello_1 = require("./components/Hello");
require("./lib/datepicker/index.js");
ReactDOM.render(React.createElement(Hello_1.Hello, { compiler: "Typescript", framework: "React" }), document.getElementById('app'));
