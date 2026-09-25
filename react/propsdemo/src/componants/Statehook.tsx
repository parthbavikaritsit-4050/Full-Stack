import { useState } from "react";

function Statehook() {

    // let name="Guest";

    // const handlebutton= ()=>{
    //     console.log("oldname:"+name);
    //     name="Parth";
    //     console.log("Newname:"+name);
    
    // }

    const [name,setname]=useState("Guest");

    const handlebutton=()=>{
        setname("Parth");
    }
    return ( 
        <>
        <h1 id="ID">Hello {name}</h1>
        <button onClick={handlebutton}>Change Name</button>
        </>
     );
}

export default Statehook;