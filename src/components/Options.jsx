import React from "react";
import Option from "./Option.jsx";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Here is your option</h3>
      <button
        className="button button--link"
        onClick={props.handleRemoveAll}
        disabled={!props.hasOptions}
      >
        Remove All Option
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Please Add some option</p>
    )}
    {props.options.map((option, index) => (
      <Option
        key={option}
        count={index + 1}
        textOption={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
