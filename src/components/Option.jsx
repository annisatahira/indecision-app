import React from "react";

const Option = props => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.textOption}
    </p>
    <button
      className="button button--link"
      onClick={e => {
        props.handleDeleteOption(props.textOption);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
