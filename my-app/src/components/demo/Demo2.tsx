import { useState } from "react";

export default function Demo2() {
  // This log runs only when Demo2 actually re-renders.
  console.log("Demo-2 re-rendered...");

  const [name, setName] = useState("pavan");

  const updateName = () => {
    // State is already "pavan". Setting the same value again
    // does not re-render this functional component.
    // React bails out when the new state is equal to the old state.
    setName("pavan");
  };

  return (
    <>
      <div>This is Demo-2 Component</div>
      <div>Name is: {name}</div>
      {/* Clicking this button will NOT re-render, because name stays "pavan" */}
      <button onClick={updateName}>Update Name</button>
    </>
  );
}
