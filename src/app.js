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

const jsx = (
  <div>
    <Header />
    <Action />
    <Option />
    <AddOption />
  </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
