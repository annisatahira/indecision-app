import React from "react";
import Option from "./Option.jsx";

const Options = props => (
  <div>
    <button onClick={props.handleRemoveAll} disabled={!props.hasOptions}>
      Remove All Option
    </button>
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
