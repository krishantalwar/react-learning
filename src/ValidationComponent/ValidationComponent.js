import React from "react";

import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p>{props.lenght > 5 ? "ok" : "bad"}</p>
    </div>
  );
};

export default person;
