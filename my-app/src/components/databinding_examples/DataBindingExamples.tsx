import React, { useState } from "react";

export default function DataBindingAssignments() {
  const [flag, setFlag] = useState(true);
  const toggleFlag = () => {
    setFlag(!flag);
  };

  return (
    <>
      <div className="border border-2 p-2 m-2">
        <div>
          1. Have a paragraph and a toggle button; on clicking the button,
          control the visibility (Show / Hide) of the paragraph.
        </div>
        {flag ? <h3>Helloo World</h3> : null}
        <button onClick={toggleFlag}>
            {flag?'HIDE':'SHOW'}
        </button>
        </div>

    
        <div className="border border-2 p-2 m-2">
        <div>
          3. create a input box, toggle the type of that input box to (text/password).
        </div>
        <input type={flag?'text':'password'}  />
        <button onClick={toggleFlag}>Toggle</button>
      </div>
    </>
 );
}