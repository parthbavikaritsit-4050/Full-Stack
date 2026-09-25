import { useState } from "react";
import useCounter from "../customhooks/usecounter";
import Modalcontent from "./Portal";


function Home() {
    const{count,increment,decrement}=useCounter();
    const [showModal,setShowModal]=useState(false);
    return (
        <>
        <h1>Home Componant:{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>


        
            <button onClick={()=>{setShowModal(true)}}>Login</button>
            {showModal && <Modalcontent onClose={()=>setShowModal(false)} />}
        </>
      );
}

export default Home;