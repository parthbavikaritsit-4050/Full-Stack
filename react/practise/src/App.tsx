import { Userprovider } from "./context/UserContext";
import Navbar from "./componants/Navbar";
import Profile from "./componants/Profile";
import Homepage from "./componants/Homepage";
import { LanguageProvider } from "./context/LanguageContext";
import Counter from "./componants/Counter";
import Form from "./componants/Form";
import Callback from "./componants/Callback";


function App() {
  return (
    //  <Userprovider>
    //    <Navbar />
    //         <Profile />
    
    //  </Userprovider>
     
    //  <LanguageProvider>
    //   <Homepage />
    //  </LanguageProvider>

     <>
     {/* <Counter /> */}
     <Form />
     <Callback />
     </>


  );
}

export default App;