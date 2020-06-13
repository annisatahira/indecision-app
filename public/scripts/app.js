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
// const user = {
//   name: "Annisa Tahira",
//   nickName: "Anta"
// };
// //use if conditional
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {user.nickName && user.nickName == "Anta" && (
//       <p>Nickname : {user.nickName}</p>
//     )}
//     {getLocation(user.location)}
//   </div>
// );

var count = 0;

var addOne = function addOne() {
  console.log("add one");
};

var addMinus = function addMinus() {
  console.log("Minus One");
};

var reset = function reset() {
  console.log("reset");
};

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
  onClick: addOne
}, "+1"), /*#__PURE__*/React.createElement("button", {
  onClick: addMinus
}, "-1"), /*#__PURE__*/React.createElement("button", {
  onClick: reset
}, "Reset"));
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot); // use to preset
// yarn babel src/app.js --out-file=public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react
