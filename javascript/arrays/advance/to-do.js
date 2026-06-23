const read = require('readline-sync');
const todos = []; //create empty array

function addTodo(todo){

    todos.push(todo);
    console.log("\n Task Added Succefully!");

}
function seeAllTodo(){

    if(todos.length==0)
        console.log("\n No todos added yet..");
    
    for(let todo of todos) console.log(todo);

}
function deleteTodo(todo){

    let index;
    for(let i=0;i<todos.length;i++){
        if(i==todo){
            index=i;
        }
    todos.splice(index,1);
    console.log(`\n Element ${name} deleted successfully `);
    }

}

while(true){


    
    const op = read.question(`\n 1. Add New Todo \n 2.See All Todos \n 3.Remove Todo \n 4.To exit.
        \nEnter Your input:`);




    switch (String(op)) {
        case "1":
            let task = read.question("Enter Task: ");
            addTodo(task); break;
        case "2":
            seeAllTodo(); break;
        case "3":
            let name = read.question("Enter Task to delete: ");
            deleteTodo(name);
            break;
        case "4":
            process.exit();
        default:
            console.log("Choose Correct option")
    }

}
console.log("Application Closed Successfully");