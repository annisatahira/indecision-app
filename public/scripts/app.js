"use strict";

var visibility = false;
var app = {
  title: "Visible Toggle",
  details: "This is details Text"
};

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("button", {
    onClick: toggleVisibility
  }, visibility ? "Hide Details" : "Show Details"), visibility && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, app.details)));
  ReactDOM.render(template, appRoot);
};

render();
