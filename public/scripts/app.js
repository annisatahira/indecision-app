"use strict";

console.log("hi"); // JavaScript XML

var template = /*#__PURE__*/React.createElement("p", null, "Cool!"); //challenge

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Annisa Tahira"), /*#__PURE__*/React.createElement("p", null, "Nickname : Anta"), /*#__PURE__*/React.createElement("p", null, "Location : Indonesia"));
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot); // use to preset
// babel src/app.js --out-file=public/scripts/app.js --presets=env, react
