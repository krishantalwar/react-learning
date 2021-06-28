import React from "react";

const userform = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={props.setusername}
        value={props.currentvalue}
      />
    </div>
  );
};

export default userform;
