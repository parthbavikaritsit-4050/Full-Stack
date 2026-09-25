function placeOrder(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`✅ Order placed for ${item}`);
        }, 2000);
    });
}

function prepareFood(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`👨‍🍳 ${item} is being prepared`);
        }, 4000);
    });
}

function assignDelivery(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`🛵 Delivery partner assigned for ${item}`);
        }, 1000);
    });
}

function deliverFood(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`📦 ${item} has been delivered`);
        }, 2000);
    });
}

placeOrder("Pasta")    
.then((resp) => {
        console.log(resp);
        return prepareFood("Pasta");
    })
    .then((resp) => {
        console.log(resp);
        return assignDelivery("Pasta");
    })
    .then((resp) => {
        console.log(resp);
        return deliverFood("Pasta");
    })
    .then((resp) => {
        console.log(resp);
        console.log("🎉 Enjoy your food!");
    })
    .catch((err) => {
        console.log(err);
    });