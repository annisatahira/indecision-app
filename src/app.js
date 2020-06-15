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
  render() {
    return (
      <div>
        <button>Make Decision For Me</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
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
  render() {
    return <div>This is AddOption Component</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
