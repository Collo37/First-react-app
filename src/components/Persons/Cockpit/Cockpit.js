import React, { useEffect, useRef } from "react";

const Cockpit = (props) => {
  const style = {
    backgroundColor: "green",
    color: "white",
    padding: "0.5rem",
    font: "inherit",
    border: "1px solid blue",
    cursor: "pointer",
  };
  const toggleButtonClick = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect...");
    toggleButtonClick.current.click();

    return () => {
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);
  return (
    <div>
      <h1>Hello from react</h1>
      <button
        ref={toggleButtonClick}
        className="toggle-button"
        style={style}
        onClick={props.clicked}
      >
        Click me
      </button>
    </div>
  );
};

export default Cockpit;
