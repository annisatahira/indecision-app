"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Count = /*#__PURE__*/function (_React$Component) {
  _inherits(Count, _React$Component);

  var _super = _createSuper(Count);

  function Count(props) {
    var _this;

    _classCallCheck(this, Count);

    _this = _super.call(this, props);
    _this.handlePlusOne = _this.handlePlusOne.bind(_assertThisInitialized(_this));
    _this.handleMinusOne = _this.handleMinusOne.bind(_assertThisInitialized(_this));
    _this.handleReset = _this.handleReset.bind(_assertThisInitialized(_this));
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Count, [{
    key: "handlePlusOne",
    value: function handlePlusOne() {
      this.setState(function (prevCount) {
        return {
          count: prevCount.count + 1
        };
      });
    }
  }, {
    key: "handleMinusOne",
    value: function handleMinusOne() {
      this.setState(function (prevCount) {
        return {
          count: prevCount.count - 1
        };
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count : ", this.state.count), /*#__PURE__*/React.createElement("button", {
        onClick: this.handlePlusOne
      }, "+1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleMinusOne
      }, "-1"), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleReset
      }, "reset"));
    }
  }]);

  return Count;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Count, null), document.getElementById("app")); // //challenge
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
