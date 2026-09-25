import { createContext, useContext, useState, type ReactNode } from "react";

type Language="English"|"marathi";

type LanguageContexttype={
    Language:Language;
    togglelanguage:()=>void;
}

type props={
    children:ReactNode;
}

const LanguageContext=createContext<LanguageContexttype|undefined>(undefined);

export const LanguageProvider=({children}:props)=>{

    const[Language,setLanguage]=useState<Language>("English");

    const togglelanguage=()=>{
        setLanguage(prev=>prev==="English"?"marathi":"English");
}

return(
    <LanguageContext.Provider value={{Language,togglelanguage}}>
        {children}
    </LanguageContext.Provider>
)

}

export const useLanguage=()=>{
    const context=useContext(LanguageContext);
    if(!context){
        throw new Error("Use Language inside provider");
    }
     return context;
}