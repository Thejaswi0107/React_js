import React from "react";

const ButtonComponent = React.memo(({ handleClick }) => {
  console.log("ButtonComponent Rendered");

  return (
    <button className="increment-btn" onClick={handleClick}>
      Increment Counter
    </button>
  );
});

export default ButtonComponent;