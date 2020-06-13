console.log("hi");

// JavaScript XML
const app = {
  title: "Indecision App",
  subtitle: "Let Computer Help You Decide it",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderFormSubmit();
  }
};

const removeOption = () => {
  app.options = [];
  renderFormSubmit();
};

const decideOption = () => {
  const randomOption = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomOption]);
};

const appRoot = document.getElementById("app");

const renderFormSubmit = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here is a Option" : "No Option"}</p>
      <button disabled={app.options.length === 0} onClick={decideOption}>
        Random Option
      </button>
      <button onClick={removeOption}>Remove All Option</button>
      <ol>
        {/* map options */}
        {app.options.map(option => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderFormSubmit();

// use to preset
// yarn babel src/app.js --out-file=public/scripts/app.js --presets=@babel/preset-env,@babel/preset-react
