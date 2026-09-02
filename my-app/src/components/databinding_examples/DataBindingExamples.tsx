import React, { useState } from "react";

export default function DataBindingAssignments() {
  const [flag, setFlag] = useState(true);
  const toggleFlag = () => {
    setFlag(!flag);
  };

  const [msg, setMsg] = useState('Hello');
  const [myFontSize, setMyFontSize] = useState(20);

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

         <div className="border border-2 p-2 m-2">
        <div>
         7. Create a textarea with maxLength = 100; as the user keeps typing, count and display how many words and how many characters are typed and  also display remaining characters.
        </div>
        <textarea maxLength={100} value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
        <div>Character Count: {msg.length}</div>
        <div>Word Count: {msg.split(' ').length}</div>
        <div>Remaining: {100- msg.length}</div>
        </div>

        <div className="border border-2 p-2 m-2">
        <div style={{ fontSize: `${myFontSize}px` }}>10. Create a dropdown with colors and change the background color of a div based on selection.</div>
        <div>current myFontSize: {myFontSize} px</div>
        <button className="btn btn-danger" onClick={()=>setMyFontSize(myFontSize-2)}>decrease</button>
        <button className="btn btn-success mx-1" onClick={()=>setMyFontSize(myFontSize+2)}>increase</button>
      </div>




    </>
 );
}