import { useReducer } from "react";
import { initialState,reducer } from "../reducers/CounterReducer";

function Counter() {
    const [state,dispatch] = useReducer(reducer,initialState)
    return ( 
        <>
            <h3>Counter Component: {state.count}</h3>
            <button onClick={()=>dispatch("increment")}>+</button>
            <button onClick={()=>dispatch("decrement")}>-</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>
        </>
     );
}

export default Counter;