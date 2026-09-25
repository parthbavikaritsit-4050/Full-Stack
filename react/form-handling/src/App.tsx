
import './App.css'
import DemoUseEffect from './Componants/Demouseeffect';
import Login from './Componants/Login'
import Register from './Componants/Register'
import { useEffect } from 'react';

function App() {

useEffect(() => {
        console.log("App Component Rendered");
    })

  return (
    <>

      <Login />
      <Register />
      <DemoUseEffect />
  

    </>
  )
}

export default App
