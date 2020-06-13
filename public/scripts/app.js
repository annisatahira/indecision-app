"use strict";

console.log("hi"); // JavaScript XML

var template = /*#__PURE__*/React.createElement("p", null, "Cool!"); //challenge

var user = {
  name: "Annisa Tahira",
  nickName: "Anta"
}; //use if conditional

function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", location);
  }
}

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name), user.nickName && user.nickName == "Anta" && /*#__PURE__*/React.createElement("p", null, "Nickname : ", user.nickName), getLocation(user.location));
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot); // use to preset
// yarn babel src/app.js --out-file=public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react
