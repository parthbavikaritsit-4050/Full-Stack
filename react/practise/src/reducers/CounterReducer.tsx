type count={
    count:number;
}

// type action={type:"increment"}|{type:"decrement"}|{type:"reset"}

export const initialState:count = {
    count: 0
}

export const reducer=(state:count,action:String)=>{
switch(action){
    case "increment":
            return {count: state.count +1}
            // take old state increase by 1 and set it to count variable
        case "decrement":
            return {count: state.count -1}
        case "reset":
            return initialState;
        default:
            return state;

}
}