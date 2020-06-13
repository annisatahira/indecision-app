"use strict";

console.log("hi"); // JavaScript XML

var app = {
  title: "Indecision App",
  subtitle: "Let Computer Help You Decide it",
  option: ["one", "two"]
}; // function getOption(option) {
//   if (option.length > 0) {
//     return <p>Here Your Option</p>;
//   } else {
//     return <p>No Option</p>;
//   }
// }

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, "Subtitle : ", app.subtitle), /*#__PURE__*/React.createElement("p", null, app.option.length > 0 ? "Here is a Option" : "No Option")); //challenge

var user = {
  name: "Annisa Tahira",
  nickName: "Anta"
}; //use if conditional

function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", location);
  }
}

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name ? user.name : "Anonymous"), user.nickName && user.nickName == "Anta" && /*#__PURE__*/React.createElement("p", null, "Nickname : ", user.nickName), getLocation(user.location));
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot); // use to preset
// yarn babel src/app.js --out-file=public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react
