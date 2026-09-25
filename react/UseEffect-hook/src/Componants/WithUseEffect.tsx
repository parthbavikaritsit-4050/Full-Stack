import { useState, useEffect } from "react";

function WithUseEffect() {
  const [count, setCount] = useState(0);

  const callOnce = () => {
    console.log("callOnce() executed");
  };

  useEffect(() => {
    callOnce();
  }, []); // Empty array = run only once

  
  return (
    <div>
        <h2>With Use Effect</h2>
      <h2>Count: {count}</h2>
      

      <button onClick={()=>{setCount(count+1)}}>Increase</button>
  
    </div>
  );
}

export default WithUseEffect;