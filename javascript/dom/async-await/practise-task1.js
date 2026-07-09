function placeorder(item){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`Your order for ${item} will be prepared soon..!`)
        },1000)
     })
}

function makefood(item){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(`${item} is ready.`)

        },5000)
        
    })
}

function assigndelivery(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Deliver Person Assigned Out for Delivery")
        },2000)
    
} )
}

function deliverfood(item){

    return new Promise((resolve, reject) => {
        setTimeout(()=>{
         resolve(`${item} has been delivered.`)
        },2000)

    })
}


async function uses(item) {
    
   try{

    const place= await placeorder(item);
    console.log(place);
    
    const prepared=await makefood(item);
    console.log(prepared);
    
    const assign=await assigndelivery();
    console.log(assign);
    
    const delivery=await deliverfood();
    console.log(delivery);

    console.log("Enjoy your food!");
   }
   catch(error){

         console.log("Eror Occured:",error);  
}

    
}

uses("Pasta");

