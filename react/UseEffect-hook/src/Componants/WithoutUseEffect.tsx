import  { useState } from "react";

function WithoutuseEffect() {
  const [count, setCount] = useState(0);

  const callOnce = () => {
    console.log("callOnce() executed");
  };

  // Runs every time component renders
  callOnce();

  


  return (
    <div>
      <h2>Without Use Effect</h2>
      <h2>Count: {count}</h2>
      

      <button onClick={() => setCount(count + 1)}>Increase
      </button>
    
    </div>
  );
}

export default WithoutuseEffect;