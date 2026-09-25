type filds={
    name:string;
    email:string;
    address:string;
    password:string;
}
type action={
    action:string;
    name:string
}

 export const initialvalue:filds={
    name:"",
    email:"",
    address:"",
    password:""
 }


export const formreducer=(state:filds,action:action):filds=>{
   
    console.log(action);
    
    return {
        ...state,
        [action.name]: action.action
    
    }

}