import EmployeeCard from "./componants/Employeeacrd"
import Greetings from "./componants/Greetings"
import DynamicLists from "./componants/DynamicLists"
import EmployeeList from "./componants/EmployeeList"
import Dashboard from "./componants/ConditionalRendering"
import Statehook from "./componants/Statehook"
import Counter from "./componants/Counter"

function App() {


  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>

      <h1> Parent Componant</h1>
     
     <Counter />
      <Statehook />
      <Greetings name="Parth" />
      <Greetings name="Atharva" />

      <EmployeeCard name={"Parth"} age={22} id={101} isactive={true} />

    <DynamicLists />
    <EmployeeList />
    <Dashboard />


    </div>
  )
}

export default App
