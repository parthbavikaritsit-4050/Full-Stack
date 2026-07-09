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




placeorder("Pasta")
.then((place) => {
    console.log(place);
    return makefood("Pasta");
})
.then((prepared) => {
    console.log(prepared);
    return assigndelivery();
})
.then((assign) => {
    console.log(assign);
    return deliverfood();
})
.then((delivery) => {
    console.log(delivery);
    console.log("Enjoy your food!");
})
.catch((error) => {
    console.log("Error Occurred:", error);
});