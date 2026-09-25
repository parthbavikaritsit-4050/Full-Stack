import { useState } from "react";

function Counter() {

const[count,setcount]=useState(0);

const handleinc=()=>{
    // setcount(count+1);
    // setcount(count+1);

    setcount(prev=>prev+1);
    setcount(prev=>prev+1);
}

    return (  
        <>
          <h1>Counter:{count}</h1>
          <button onClick={()=>{setcount(count+1);}}>+</button>
          <button onClick={()=>{setcount(count-1);}}>-</button>
          <button onClick={handleinc}>Twice+</button>
          </>
    );
}


export default Counter;
