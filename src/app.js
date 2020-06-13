console.log("hi");

// JavaScript XML
const app = {
  title: "Indecision App",
  subtitle: "Let Computer Help You Decide it",
  option: ["one", "two"]
};

// function getOption(option) {
//   if (option.length > 0) {
//     return <p>Here Your Option</p>;
//   } else {
//     return <p>No Option</p>;
//   }
// }
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>Subtitle : {app.subtitle}</p>}
    <p>{app.option.length > 0 ? "Here is a Option" : "No Option"}</p>
  </div>
);

//challenge

const user = {
  name: "Annisa Tahira",
  nickName: "Anta"
};

//use if conditional
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.nickName && user.nickName == "Anta" && (
      <p>Nickname : {user.nickName}</p>
    )}
    {getLocation(user.location)}
  </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

// use to preset
// yarn babel src/app.js --out-file=public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react
