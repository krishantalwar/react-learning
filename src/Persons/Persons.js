import React from "react";

function Persons(param) {
  return (
    <div>
      <p>{param.age}</p>
      <p>{param.default}</p>
    </div>
  );
}

export default Persons;
