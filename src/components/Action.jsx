import React from "react";

const Action = props => (
  <div>
    <button onClick={props.handlePick} disabled={!props.hasOptions}>
      Make Decision For Me
    </button>
  </div>
);

export default Action;
