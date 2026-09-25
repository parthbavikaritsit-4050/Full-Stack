import { useContext } from "react";
import { Subjectcontext } from "../context/Subjectcontext";

function Subject() {
    const [subject,value]=useContext(Subjectcontext)
    return (  

         <div style={{backgroundColor:"red", padding:"5px", margin:"5px"}}>
            <h1>Subject Componant</h1>
            <h2>Subject is:{subject}{value}</h2>
             
        </div>
    );
}

export default Subject;