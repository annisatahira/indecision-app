"use strict";

console.log("hi"); // JavaScript XML

var template = /*#__PURE__*/React.createElement("p", null, "Cool!"); //challenge

var user = {
  name: "Annisa Tahira",
  nickName: "Anta",
  location: "Indonesia"
};
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name), /*#__PURE__*/React.createElement("p", null, "Nickname : ", user.nickName.toLocaleUpperCase()), /*#__PURE__*/React.createElement("p", null, "Location : ", user.location));
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot); // use to preset
// babel src/app.js --out-file=public/scripts/app.js --presets=env, react
