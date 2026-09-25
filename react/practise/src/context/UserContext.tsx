import { Children, createContext, useContext, useState, type ReactNode } from "react";

type user={
    name:String;
    email:String;
}

type UserContextType={
    user:user|null;
    login:()=>void;
    logout:()=>void;
}

type prop={
    children:ReactNode;
}

const UserContext=createContext<UserContextType|undefined>(undefined);

export const Userprovider=({children}:prop)=>{

    const[user,setuser]=useState<user|null>(null);

    const login=()=>{
        setuser({name:"abc",email:"abc@gamail"});

    }
    const logout=()=>{
        setuser(null);
    }
    

    return(
     
        <UserContext.Provider value={{user,login,logout}}>
         {children}
        </UserContext.Provider>
    );


}

export const useUser = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error("useUser must be used inside UserProvider");
    }

    return context;
};

