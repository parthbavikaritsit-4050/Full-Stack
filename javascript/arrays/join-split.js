

// make first letter of each word capital
let statement="my name is sonam and ia am devops engineer";
let array= statement.split(" ");
// console.log(array);
for(let i=0;i<array.length;i++){
    array[i] = array[i][0].toUpperCase()+array[i].slice(1);
    // console.log(array[i]);
}

let newStatement= array.join(" ");
console.log("Statement: ",newStatement);