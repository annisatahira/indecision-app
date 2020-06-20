import React from "react";

const Option = props => {
  return (
    <div>
      Option : {props.textOption}
      <button
        onClick={e => {
          props.handleDeleteOption(props.textOption);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Option;
