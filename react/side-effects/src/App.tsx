
import { useEffect, useState } from 'react'
import './App.css'
import UseEffectDemo from './componants/UseEffectDemo';
import Users from './componants/Users';
import College from './componants/College';
import { Subjectcontext } from './context/Subjectcontext';



function App() {
  useEffect(() => {
    console.log("App Componant Rendered");

  })

 const[subject,setsubject]=useState("English");
  return (
    <>
      {/* <UseEffectDemo />
     <Users /> */}

     
      <div style={{ backgroundColor: "purple", padding: "5px", margin: "5px" }}>

        <Subjectcontext.Provider value={subject}>

          <select name="" id="" value={subject} onChange={(event)=>{setsubject(event.target.value)}}>
            <option value="">Select</option>
            <option value="Math">Math</option>
            <option value="English">English</option>
            <option value="Marathi">Marathi</option>
          </select>
          <button onClick={()=>{setsubject("")}}>Clear</button>

          <h1>Contect Api</h1>

          <College />

        </Subjectcontext.Provider>
      </div>
    </>
  )
}

export default App
