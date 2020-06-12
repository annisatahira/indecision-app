console.log("hi");

// JavaScript XML
var template = <p>Cool!</p>;

//challenge

var user = {
  name: "Annisa Tahira",
  nickName: "Anta",
  location: "Indonesia"
};
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Nickname : {user.nickName.toLocaleUpperCase()}</p>
    <p>Location : {user.location}</p>
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);

// use to preset
// yarn babel src/app.js --out-file=public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react
