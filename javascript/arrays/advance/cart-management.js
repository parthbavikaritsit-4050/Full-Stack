const read = require('readline-sync');
const cart = []; //create empty array

function additem(item){
    cart.push(item);
    console.log("Item added Succesfullt!");
}

function seeallitem(){
 for(let item of cart)  console.log(item);
}

function removeitem(item){
    let index;
    for(let i=0;i<cart.length;i++){
        if(cart[i]==item){
            index=i;}

    } console.log(`Items ${item} Removed Succesfully!`);
      cart.splice(index,1);  
}

    while(true){
        

        const op = read.question(`\n 1. Add New Item \n 2.See All Items \n 3.Remove TItems \n 4.Exit.
                \nEnter Your input:`);

        switch(op){
            case "1":
                let name=read.question("Enter Item To Inset: ");
                additem(name);
                break;

            case "2":
                console.log("Items In Cart:\n") ;
                seeallitem();
                break;

            case "3":
                let delitem=read.question("Enter Item TO Delete:");
                removeitem(delitem);
                break;
                
            case "4":
                 process.exit();
                 break;

            default:
            console.log("Choose Correct option")
    }

}console.log("Application Closed Successfully");