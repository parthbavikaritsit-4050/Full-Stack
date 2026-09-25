import { useLanguage } from "../context/LanguageContext";

function Homepage() {
    
    const{Language,togglelanguage}=useLanguage();
    return ( 
        <>
        <h1>{Language==="English"?"Welcome User":"स्वागत आहे, वापरकर्ते."}</h1>
        <button onClick={togglelanguage}>Toggle</button>
        </>
     );
}

export default Homepage;