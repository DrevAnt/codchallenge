import React from "react";

function ParentProps({ children }) {
  return (
    <div className="element">
      <h3>Parent</h3>
      {children}
    </div>
  );
}

export default ParentProps;
