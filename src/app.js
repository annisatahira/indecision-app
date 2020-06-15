class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Header</h1>
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
        This is Options Component
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>This is Option Component</div>;
  }
}

class AddOption extends React.Component {
  render() {
    return <div>This is AddOption Component</div>;
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
