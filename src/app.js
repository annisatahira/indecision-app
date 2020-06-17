class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleRemoveAll() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const randomOption = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomOption];
    alert(option);
  }

  handleAddOption(option) {
    //handle error
    if (!option) {
      return "Please enter a new valid data";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This data already exist";
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render() {
    const title = "Indecision";
    const subtitle = "Let Computer Decide it For You";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          hasOptions={this.state.options.length > 0}
          handleRemoveAll={this.handleRemoveAll}
        />
        <AddOption handleAddOption={this.handleAddOption} />
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
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >
          Make Decision For Me
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handleRemoveAll}
          disabled={!this.props.hasOptions}
        >
          Remove All
        </button>
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
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
