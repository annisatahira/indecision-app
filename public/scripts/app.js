"use strict";

console.log("hi"); // JavaScript XML

var app = {
  title: "Indecision App",
  subtitle: "Let Computer Help You Decide it",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFormSubmit();
  }
};

var removeOption = function removeOption() {
  app.options = [];
  renderFormSubmit();
};

var appRoot = document.getElementById("app");

var renderFormSubmit = function renderFormSubmit() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? "Here is a Option" : "No Option"), /*#__PURE__*/React.createElement("p", null, app.options.length), /*#__PURE__*/React.createElement("button", {
    onClick: removeOption
  }, "Remove All Option"), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (option) {
    return /*#__PURE__*/React.createElement("li", {
      key: option
    }, option);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};

renderFormSubmit(); // use to preset
// yarn babel src/app.js --out-file=public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react
