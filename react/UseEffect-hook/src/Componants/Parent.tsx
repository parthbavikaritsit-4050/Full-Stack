import { useState } from "react";
import Child from "./Child";

function Parent() {
    
    const[state,setstate]=useState<boolean>(true);
    
    return (  


        <div style={{border:"2px solid black", padding:"5px", margin:"5px"}}>
        <h1>Parent Componant</h1>
        <button onClick={()=>{setstate(!state)}}>Toggle</button>
        {state && <Child />}
        </div>
    );
}

export default Parent;