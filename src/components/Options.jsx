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
    {props.options.length === 0 && <p>Please Add some option</p>}
    {props.options.map(option => (
      <Option
        key={option}
        textOption={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
