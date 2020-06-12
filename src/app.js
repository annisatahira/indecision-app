console.log("hi");

// JavaScript XML
var template = <p>Cool!</p>;
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

// use to preset
// babel src/app.js --out-file=public/scripts/app.js --presets=env, react
