import React from "react";
import "./Person.css";

function Persons(param) {
  return (
    <div onClick={param.click} className="person">
      <p>{param.age}</p>
      <p>{param.children}</p>
      <input type="text" onChange={param.namechangehandler} value="ttttttt" />
    </div>
  );
}

export default Persons;
