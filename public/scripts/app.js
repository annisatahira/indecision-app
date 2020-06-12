console.log("hi");

// JavaScript XML
// var template = <p>Hello first jsx</p>;
var template = /*#__PURE__*/ React.createElement(
  "p",
  {
    id: "text"
  },
  "Hello first jsx"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
