class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Let Computer Decide it For You";
    const options = ["one", "two", "three"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("Handle Pick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>Make Decision For Me</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} textOption={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>Option : {this.props.textOption}</div>;
  }
}

class AddOption extends React.Component {
  handleSubmit(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option"></input>
          <button>add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
