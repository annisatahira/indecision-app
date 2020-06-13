"use strict";

console.log("hi"); // JavaScript XML

var template = /*#__PURE__*/React.createElement("p", null, "Cool!"); //challenge

var user = {
  name: "Annisa Tahira",
  nickName: "Anta"
};

function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", location);
  }
}

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name), /*#__PURE__*/React.createElement("p", null, "Nickname : ", user.nickName.toLocaleUpperCase()), getLocation(user.location));
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot); // use to preset
// yarn babel src/app.js --out-file=public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react
