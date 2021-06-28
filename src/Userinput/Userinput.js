import React from "react";

const userform = (props) => {
  return (
    <div>
      <input type="text" onChange={props.setusername} />
    </div>
  );
};

export default userform;
