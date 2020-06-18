class Count extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlusOne = this.handlePlusOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidMount(prevCount) {
    try {
      const stringCount = localStorage.getItem("count");
      const count = parseInt(stringCount, 10);

      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevCount) {
    if (prevCount.count !== this.state.count) {
      const count = this.state.count;
      localStorage.setItem("count", count);
    }
  }
  handlePlusOne() {
    this.setState(prevCount => {
      return {
        count: prevCount.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState(prevCount => {
      return {
        count: prevCount.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.handlePlusOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById("app"));

// //challenge

// // const user = {
// //   name: "Annisa Tahira",
// //   nickName: "Anta"
// // };

// // //use if conditional
// // function getLocation(location) {
// //   if (location) {
// //     return <p>Location: {location}</p>;
// //   }
// // }
// // const templateTwo = (
// //   <div>
// //     <h1>{user.name ? user.name : "Anonymous"}</h1>
// //     {user.nickName && user.nickName == "Anta" && (
// //       <p>Nickname : {user.nickName}</p>
// //     )}
// //     {getLocation(user.location)}
// //   </div>
// // );

// let count = 0;
// const addOne = () => {
//   count++;
//   //rerender
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
