import { useEffect } from "react";

function Child() {
    

    useEffect(()=>{
        console.log("Component Mounted");
        
        //Cleanup Function
        return ()=>{
            console.log("Component Unmounted");
        }
    },[])

    return (

<div style={{border:"2px solid green", padding:"5px", margin:"5px"}}>
    <h1>Child Componant</h1>
</div>
     
    );
}

export default Child;