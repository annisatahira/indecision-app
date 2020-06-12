console.log("hi");

// JavaScript XML
var template = <p>Cool!</p>;

//challenge
var templateTwo = (
  <div>
    <h1>Annisa Tahira</h1>
    <p>Nickname : Anta</p>
    <p>Location : Indonesia</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);

// use to preset
// babel src/app.js --out-file=public/scripts/app.js --presets=env, react
