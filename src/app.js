console.log("hi");

// JavaScript XML
var template = <p>Cool!</p>;

//challenge

var user = {
  name: "Annisa Tahira",
  nickName: "Anta"
};

//use if conditional
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>

    {getLocation(user.location)}
  </div>
);
var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);

// use to preset
// yarn babel src/app.js --out-file=public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react
