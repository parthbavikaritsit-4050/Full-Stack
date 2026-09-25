import { useReducer } from "react";
import { initialvalue,formreducer } from "../reducers/formreducer";

function Form() {

    const[state,dispatch]=useReducer(formreducer,initialvalue);

    return ( 
    <>
        <input type="text" placeholder="Name" name="name" onChange={(event)=>{dispatch({name:event.target.name,action:event.target.value})}}/>
        <input type="text" placeholder="Email" name="email" onChange={(event)=>{dispatch({name:event.target.name,action:event.target.value})}}/>
        <input type="text" placeholder="Address" name="address" onChange={(event)=>{dispatch({name:event.target.name,action:event.target.value})}}/>
        <input type="text" placeholder="Password" name="password" onChange={(event)=>{dispatch({name:event.target.name,action:event.target.value})}}/>
     
      <h3>Name: {state.name}</h3>
            <h3>Email: {state.email}</h3>
            <h3>Address: {state.address}</h3>
            <h3>Password: {state.password}</h3>
    </>    
    );
}

export default Form;

