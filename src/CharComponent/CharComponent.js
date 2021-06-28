import React from "react";

const charcomponent = (props) => {
  return (
    <ul>
      <li onClick={props.delete}>{props.input}</li>
    </ul>
  );
};

export default charcomponent;
